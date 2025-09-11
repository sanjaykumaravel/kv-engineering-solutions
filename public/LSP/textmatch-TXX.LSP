
*************************************************************************************
(DEFUN C:txx() 
(SETQ a (SSGET))
(SETQ T(ENTSEL))
(SETQ N (SSLENGTH A))
(SETQ INDEX 0)
(REPEAT n
(SETQ B1 (ENTGET (SSNAME A INDEX)))
(SETQ INDEX (1+ INDEX))
(SETQ B (ASSOC 1 B1))
(IF (/= "" (CDR B))
(PROGN
(SETQ K (ENTGET (CAR T)))
(SETQ M (CDR (ASSOC 1 K)))
(SETQ C (ASSOC 1 B1))
(SETQ D11 (CONS (CAR C) M))
(SETQ B2 (SUBST D11 C B1))
(ENTMOD B2)
(PRIN1)))))
**************************************************************************************
