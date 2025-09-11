(defun c:deltext ( / ss )
(setq ss (ssget "x" (list (cons 0 "text"))))
(if ss
(command ".erase" ss "")
(princ "\nNo text in this drawing!")
)
(princ)
) 