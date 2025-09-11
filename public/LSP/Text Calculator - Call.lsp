7.Text Calculator - Call

(defun C:call (/ S1 LG INDEX A B C D)
 (setq S1 (ssget)
 LG (sslength S1)
 INDEX 0
 C 0
 ) ;_ end of setq
 (while (/= INDEX LG)
 (setq A (entget (ssname S1 INDEX))
 D (cdr (assoc 0 A))
 ) ;_ end of setq
 (if (= D "TEXT")
 (progn
 (setq B (atof (cdr (assoc 1 A)))
 C (+ C B)
 ) ;_ end of setq
 ) ;_ end of progn
 ) ;_ end of if
 (setq INDEX (1+ INDEX))
 ) ;_ end of while
 (princ "\nTotal Value: ")
 (princ C)
 (princ)
 ) ;end defun


 (defun C:SUB (/ MS ML INDEXM CM MA MD MB CM S LG INDEX
 A B C C1 D
 )
 (prompt "SELECT the MAIN Number(s): ")
 (setq MS (ssget)
 ML (sslength MS)
 INDEXM 0
 CM 0
 ) ;_ end of setq
 (while (/= INDEXM ML)
 (setq MA (entget (ssname MS INDEXM))
 MD (cdr (assoc 0 MA))
 ) ;_ end of setq
 (if (= MD "TEXT")
 (progn
 (setq MB (atof (cdr (assoc 1 MA)))
 CM (+ CM MB)
 ) ;_ end of setq
 ) ;_ end of progn
 ) ;_ end of if
 (setq INDEXM (1+ INDEXM))
 ) ;_ end of while
 (prompt "\nSelect the NUMBERS to be DUDUCTED: ")
 (setq S (ssget)
 LG (sslength S)
 INDEX 0
 C 0
 ) ;_ end of setq
 (while (/= INDEX LG)
 (setq A (entget (ssname S INDEX))
 D (cdr (assoc 0 A))
 ) ;_ end of setq
 (if (= D "TEXT")
 (progn
 (setq B (atof (cdr (assoc 1 A)))
 C (+ C B)
 ) ;_ end of setq
 ) ;_ end of progn
 ) ;_ end of if
 (setq INDEX (1+ INDEX))
 ) ;_ end of while
 (setq C1 (- CM C))
 (princ "\nNett value: ")
 (princ C1)
 (princ)
