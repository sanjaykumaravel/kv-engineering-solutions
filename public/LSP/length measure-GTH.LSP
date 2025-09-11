+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
(defun c:gth()
  (setq get (ssget (list (cons 0 "line")))
	ssl (sslength get)
	ind 0
	final 0 
  )
    (repeat ssl
       (setq ssna (ssname get ind)
	     eget (entget ssna)
	     sp  (cdr (assoc 10 eget))
	     ep  (cdr (assoc 11 eget))
	     ds (distance sp ep)           
	     final (+ final ds )  
	     ind (1+ ind)
       )
    )
       (setq l_sum "Length = "
		len_final (strcat l_sum (rtos final 2 2))
       )
       (alert len_final)       
		(princ "\nLength = ")(princ final)(princ) 
)
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
