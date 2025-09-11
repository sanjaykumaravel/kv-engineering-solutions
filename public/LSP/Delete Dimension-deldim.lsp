(defun c:deldim ( / ss )
(setq ss (ssget "x" (list (cons 0 "Dimension"))))
(if ss
(command ".erase" ss "")
(princ "\nNo dimensions in this drawing!")
)
(princ)
) 