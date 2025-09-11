5.joint text-JT


(defun c:jt()
   (setq sl1 (entsel)
	 sl2 (entsel)
	 et1 (entget (car sl1))
	 et2 (entget (car sl2))
	 ac1 (assoc 1 et1)
	 ac2 (assoc 1 et2)
	 sle (strlen (cdr ac1))
	 sub (strcat (substr (cdr ac1) 1) " " (cdr ac2))
	 con (cons (car ac1) sub)
	 sst (subst con ac1 et1)
   )
     (entmod sst)
     (command "erase" sl2 "")
)
