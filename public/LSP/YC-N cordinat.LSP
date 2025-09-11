(defun c:yc(/ pt text entity ent t2 con substit)
 (setq pt(getpoint "\nID point: "))
 (setq text(rtos (/ (cadr pt) ) 2 3))

 (setq entity(car(entsel)))
 (setq ent (entget entity))
 (setq t2(assoc 1 ent))

 (setq con(cons 1 (strcat "N=" text)))
 (setq substit(subst con t2 ent))
 (entmod substit)

(princ)
)
