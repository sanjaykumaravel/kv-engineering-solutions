8.Array - IncArray



 (defun c:IncArray  nil (IncArray nil))
(defun c:IncArrayD nil (IncArray   t)) ;; Dynamic Version

(defun IncArray

  ( dyn / *error* _splitstring _increment _ss->lst _copyvector dx gr i ls nl nx ob p0 p1 pd pw px vx )

  (defun *error* ( msg )
    (or (wcmatch (strcase msg) "*BREAK,*CANCEL*,*EXIT*")
        (princ (strcat "\n** Error: " msg " **")))
    (redraw) (princ)
  )

  (defun _SplitString ( str / _isString _isNumber lst )
    ;; Original by Gile, modified by Lee Mac
    
    (defun _isString ( x lst / tmp )    
      (cond
        ( (null lst) (list x)
        )        
        ( (< 47 (car lst) 58)         
          (cons x (_isNumber (chr (car lst)) (cdr lst)))
        )      
        ( (= 45 (car lst))         
          (if
            (and (cadr lst)
              (numberp (read (setq tmp (strcat "-" (chr (cadr lst))))))
            )
            (cons x (_isNumber tmp (cddr lst)))
            (_isString (strcat x (chr (car lst))) (cdr lst))
          )
        )      
        ( (_isString (strcat x (chr (car lst))) (cdr lst)))
      )
    )
    (defun _isNumber ( x lst / tmp )    
      (cond
        ( (null lst) (list x)
        )        
        ( (= 46 (car lst))         
          (if
            (and (cadr lst)
              (numberp (read (setq tmp (strcat x "." (chr (cadr lst))))))
            )         
            (_isNumber tmp (cddr lst))
            (cons x (_isString (chr (car lst)) (cdr lst)))
          )
        )
        ( (< 47 (car lst) 58)         
          (_isNumber (strcat x (chr (car lst))) (cdr lst))
        )      
        ( (cons x (_isString (chr (car lst)) (cdr lst))))
      )
    )
    (if (setq lst (vl-string->list str))
      (
        (if
          (or
            (and (= 45 (car lst)) (< 47 (cadr lst) 58))
            (< 47 (car lst) 58)
          )
          _isNumber _isString
        )
        (chr (car lst)) (cdr lst)
      )
    )
  )

  (defun _increment ( str inc / num prc )
    (cond
      ( (eq (type (read str)) 'INT)
        (setq num (itoa (+ (atoi str) inc)))
        (repeat (- (strlen str) (strlen num))
          (setq num (strcat "0" num))
        )
        num
      )
      ( (eq (type (read str)) 'REAL)
        (setq prc (- (strlen str) (vl-string-position 46 str) 1)
              num (rtos (+ (atof str) inc) 2 prc)
        )
        (repeat (- (vl-string-position 46 str) (vl-string-position 46 num))
          (setq num (strcat "0" num))
        )
        (repeat (- prc (- (strlen num) (vl-string-position 46 num) 1))
          (setq num (strcat num "0"))
        )
        num
      )
      ( str )
    )
  )

  (defun _ss->lst ( ss / i lst obj )
    (if ss
      (repeat (setq i (sslength ss))
        (setq lst
          (cons
            (cons
              (setq obj (vlax-ename->vla-object (ssname ss (setq i (1- i)))))
              (cond
                ( (wcmatch (vla-get-objectname obj) "AcDb*Text,AcDbMLeader")
                  (list
                    (cons 'textstring (_SplitString (vla-get-TextString obj)))
                  )
                )
                ( (wcmatch (vla-get-objectname obj) "AcDb*Dimension")
                  (list
                    (cons 'textoverride (_SplitString (vla-get-textoverride obj)))
                  )
                )
                ( (eq "AcDbAttributeDefinition" (vla-get-objectname obj))
                  (list
                    (cons 'tagstring    (_SplitString (vla-get-TagString    obj)))
                    (cons 'promptstring (_SplitString (vla-get-promptstring obj)))
                    (cons 'textstring   (_SplitString (vla-get-TextString   obj)))
                  )
                )
                ( (and
                    (eq "AcDbBlockReference" (vla-get-objectname obj))
                    (eq :vlax-true (vla-get-hasattributes obj))
                  )
                  (mapcar
                    (function
                      (lambda ( a )
                        (cons 'textstring (_SplitString (vla-get-textstring a)))
                      )
                    )
                    (vlax-invoke obj 'getattributes)
                  )
                )
              )
            )
            lst
          )
        )
      )
    )
  )

  (defun _CopyVector ( objs vec n / i base lst ) (setq i 1 base (vlax-3D-point '(0.0 0.0 0.0)))
    (repeat n 
      (foreach obj objs
        (vla-move (car (setq lst (cons (vla-copy (car obj)) lst))) base
          (vlax-3D-point (mapcar '* vec (list i i i)))
        )
        (if
          (and
            (eq "AcDbBlockReference" (vla-get-objectname (car obj)))
            (eq :vlax-true (vla-get-hasattributes (car obj)))
          )
          (mapcar
            (function
              (lambda ( a b )
                (vl-catch-all-apply 'vlax-put-property
                  (list a (car b)
                    (apply 'strcat
                      (mapcar (function (lambda ( c ) (_increment c i))) (cdr b))
                    )
                  )
                )
              )
            )
            (vlax-invoke (car lst) 'getattributes)
            (cdr obj)
          )
          (foreach prop (cdr obj)
            (vlax-put-property (car lst) (car prop)
              (apply 'strcat
                (mapcar (function (lambda ( a ) (_increment a i))) (cdr prop))
              )
            )
          )
        )
      )
      (setq i (1+ i))
    )
    lst
  )

  (if
    (and
      (setq ls (_ss->lst (ssget "_:L" '((0 . "~VIEWPORT")))))
      (setq p0 (getpoint "\nBase Point: "))
      (setq px (getpoint "\nArray Vector: " p0))
      (setq pw (trans p0 1 0)
            pd (trans p0 1 3)
            vx (trans (mapcar '- px p0) 1 0 t)
            dx (distance '(0. 0. 0.) vx)
      )
      (not (equal dx 0.0 1e-14))
    )
    (cond
      ( dyn
        (princ "\nArray Endpoint: ")
        (while (= 5 (car (setq gr (grread 't 13 0)))) (redraw)
          (setq ob  (car (mapcar 'vla-delete ob))
                nx  (fix (setq nl (/ (caddr (trans (mapcar '- (cadr gr) p0) 1 vx t)) dx)))
                ob  (_copyvector ls (mapcar (if (minusp nx) '- '+) vx) (abs nx))
          )
          (grvecs (list -3 '(0. 0. 0.) (mapcar '* (trans vx 0 3) (list nl nl nl)))
            (list
              (list 1. 0. 0. (car   pd))
              (list 0. 1. 0. (cadr  pd))
              (list 0. 0. 1. (caddr pd))
              (list 0. 0. 0. 1.)
            )
          )
        )
        (redraw)
      )
      ( (setq p1 (getpoint p0 "\nArray Endpoint: "))
        (setq nx (fix (/ (caddr (trans (mapcar '- p1 p0) 1 vx t)) dx)))
        (_copyvector ls (mapcar (if (minusp nx) '- '+) vx) (abs nx))
      )
    )
  )
  (princ)
)
(vl-load-com) (princ)
