;TIP1244.LSP:   ORG.LSP   True dimension    (c)1996, D.A. Longhenry

(defun item ( a b ) (cdr (assoc a b)) )
(defun c:org ( / ss cnt en )
  ;*Save current values
  (setq old_echo (getvar "cmdecho")
    old_snap (getvar "snapmode")
  );end setq

  ;*Set new setvars
  (setvar "cmdecho" 0)
  (setvar "snapmode" 0)

  ;*Get selection set
  (setq ss (ssget)
    cnt 0
  );end setq

  ;*Reset to default value if entity is a dimension
  (repeat (sslength ss)
    (setq en (entget (ssname ss cnt))
      cnt (1+ cnt)
    );end setq
    (if (= (item 0 en) "DIMENSION")
      (entmod (subst (cons 1 "") (assoc 1 en) en) )
    );end if
  );end repeat

  ;*Reset setvars to old values
  (setvar "cmdecho" old_echo)
  (setvar "snapmode" old_snap)

  (princ)
);end defun c:org
;
(princ);end org.lsp
