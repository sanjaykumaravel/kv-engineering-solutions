
(defun c:txt2att ( / el i ss st ) (vl-load-com)
  
  (if (setq ss (ssget "_:L" '((0 . "TEXT"))))
    (repeat (setq i (sslength ss))
      (setq el (entget (ssname ss (setq i (1- i))))
            st (vl-string-translate " " "_" (cdr (assoc 1 el)))
      )
      (if
        (entmakex
          (append '((0 . "ATTDEF"))
            (vl-remove-if '(lambda ( pair ) (member (car pair) '(0 100 73))) el)
            (list
              (cons 70  0)
              (cons 74 (cdr (assoc 73 el)))
              (cons  2 st)
              (cons  3 st)
            )
          )
        )
        (entdel (cdr (assoc -1 el)))
      )
    )
  )
  (princ)
)