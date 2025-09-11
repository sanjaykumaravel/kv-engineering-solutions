
(defun c:at ( / *error* bpt enx inc ins lst sel spf vec )

    (setq spf 2.00) ;; Line Spacing Factor

    (defun *error* ( msg )
        (LM:endundo (LM:acdoc))
        (if (not (wcmatch (strcase msg t) "*break,*cancel*,*exit*"))
            (princ (strcat "\nError: " msg))
        )
        (princ)
    )

    (if (setq sel (ssget "_:L" '((0 . "TEXT"))))
        (progn
            (setq inc (sslength sel)
                  enx (entget (ssname sel (1- inc)))
                  spf (polar '(0.0 0.0) (+ (cdr (assoc 50 enx)) (/ pi 2.0)) (* (cdr (assoc 40 enx)) spf))
                  vec (trans spf (trans '(0.0 0.0 1.0) 1 0 t) 0)
            )
            (repeat inc
                (setq lst (cons (entget (ssname sel (setq inc (1- inc)))) lst)
                      ins (cons (caddr (trans (aligntext:gettextinsertion (car lst)) (cdr (assoc -1 (car lst))) vec)) ins)
                )
            )
            (setq lst (mapcar '(lambda ( n ) (nth n lst)) (vl-sort-i ins '>))
                  bpt (aligntext:gettextinsertion (car lst))
            )
            (LM:startundo (LM:acdoc))
            (foreach itm (cdr lst)
                (aligntext:puttextinsertion (setq bpt (mapcar '- bpt spf)) itm)
            )
            (LM:endundo (LM:acdoc))
        )
    )
    (princ)
)

(defun aligntext:getdxfkey ( enx )
    (if
        (and
            (zerop (cdr (assoc 72 enx)))
            (zerop (cdr (assoc 73 enx)))
        )
        10 11
    )
)

(defun aligntext:gettextinsertion ( enx )
    (cdr (assoc (aligntext:getdxfkey enx) enx))
)

(defun aligntext:puttextinsertion ( ins enx )
    (   (lambda ( key )
            (if (entmod (subst (cons key ins) (assoc key enx) enx))
                (entupd (cdr (assoc -1 enx)))
            )
        )
        (aligntext:getdxfkey enx)
    )
)

;; Start Undo  -  Lee Mac
;; Opens an Undo Group.

(defun LM:startundo ( doc )
    (LM:endundo doc)
    (vla-startundomark doc)
)

;; End Undo  -  Lee Mac
;; Closes an Undo Group.

(defun LM:endundo ( doc )
    (while (= 8 (logand 8 (getvar 'undoctl)))
        (vla-endundomark doc)
    )
)

;; Active Document  -  Lee Mac
;; Returns the VLA Active Document Object

(defun LM:acdoc nil
    (eval (list 'defun 'LM:acdoc 'nil (vla-get-activedocument (vlax-get-acad-object))))
    (LM:acdoc)
)

(vl-load-com) (princ)
