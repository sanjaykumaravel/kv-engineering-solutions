

(defun c:0line (/ ss pt1 pt2 lst)
(if (setq ss (ssget "X" (list (cons 0 "LINE")
(if (getvar "CTAB")(cons 410 (getvar "CTAB"))
(cons 67 (- 1 (getvar "TILEMODE")))))))
(progn
(setq ss (mapcar 'entget (mapcar 'cadr (ssnamex ss))))
(foreach elst ss
(setq pt1 (cdr (assoc 10 elst)) pt2 (cdr (assoc 11 elst)))
(setq pt1 (subst 0.0 (last pt1) pt1) pt2 (subst 0.0 (last pt2) pt2))
(setq lst (subst (cons 10 pt1) (assoc 10 elst) elst))
(entmod (subst (cons 11 pt2) (assoc 11 lst) lst))))
(princ "\n<!> No Lines Found <!>"))
(princ))
