2.Space Reduce - CS

 	(defun C:CS()
(setvar "cmdecho" 0)
(setvar "BLIPMODE" 0)
(initget (+ 1 2 4))
(setq fs (getreal "\nEnter Scale From : "))
(initget (+ 1 2 4))
(setq ts (getreal "\nEnter Scale To   : "))
(setq sf (/ fs ts))
(setq tf (/ ts fs))
(setq p (ssget))
(if p (progn
(initget (+ 1 2 4))
(setq p1 (getpoint "\nEnter Base Point : "))
(command "scale" p "" p1 sf)
(setq l 0 nol (sslength p))
(while (< l nol)
(setq e (entget (ssname p l)))
(if (= "TEXT" (cdr (assoc 0 e))) (progn
(setq height (cdr (assoc 40 e)))
(setq height (* height tf))
(setq e (subst (cons 40 height) (assoc 40 e) e))
(entmod e)
))
(setq l (1+ l))
)
))
)


  (setq eset1 nil)
)

