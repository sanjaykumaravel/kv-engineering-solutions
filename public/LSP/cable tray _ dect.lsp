(defun c:duct(/ oldWd oldFil oldEch lEnt pl1 actDoc
      pl2 vLst1 vLst2 stLst *error* oldWid)
 
 (vl-load-com)

 (defun GetPlineVer(plObj)
   (mapcar 'cdr
    (vl-remove-if-not
     '(lambda(x)(=(car x)10))
     (entget plObj)))
   ); end of GetPLineVer

 (defun asmi-LayersUnlock(/ restLst)
 (setq restLst '())
 (vlax-for lay
    (vla-get-Layers
            (vla-get-ActiveDocument
              (vlax-get-acad-object)))
   (setq restLst
    (append restLst
      (list
        (list
         lay
          (vla-get-Lock lay)
   (vla-get-Freeze lay)
         ); end list
        ); end list
      ); end append
   ); end setq
   (vla-put-Lock lay :vlax-false)
   (if
     (vl-catch-all-error-p
(vl-catch-all-apply
  'vla-put-Freeze(list lay :vlax-false)))
     t)
   ); end vlax-for
 restLst
 ); end of asmi-LayersUnlock

 (defun asmi-LayersStateRestore(StateList)
 (foreach lay StateList
   (vla-put-Lock(car lay)(cadr lay))
    (if
     (vl-catch-all-error-p
(vl-catch-all-apply
  'vla-put-Freeze(list(car lay)(nth 2 lay))))
     t)
   ); end foreach
 (princ)
    ); end of asmi-LayersStateRestore

 (defun *error*(msg)
   (if(and oldEch oldFil)
     (progn
   (setvar "CMDECHO" oldEch)
   (setvar "FILLMODE" oldFil)
   (setvar "PLINEWID" oldWid)
     ); end progn
    ); end if
    (if actDoc
     (vla-EndUndoMark actDoc)
     ); end if
   (princ)
   ); end of *error*
 
 (if(not duct:pWd)(setq duct:pWd 1.0))
 (setq oldWd duct:pWd
duct:pWd(getdist
     (strcat "\nSpecify pipe diameter <" (rtos duct:pWd) ">: "))
oldFil(getvar "FILLMODE")
oldEch(getvar "CMDECHO")
oldWid(getvar "PLINEWID")
); end setq
 (if(null duct:pWd)(setq duct:pWd oldWd))
 (mapcar 'setvar
  '("CMDECHO" "FILLMODE") '(0 0))
 (if(entlast)(setq lEnt(entlast)))
 (vla-StartUndoMark
    (setq actDoc
	   (vla-get-ActiveDocument
		  (vlax-get-acad-object))))
 (princ "\nSpecify start point: ")
 (command "_.pline" pause)
 (command "_w" duct:pWd duct:pWd)
 (while(= 1(getvar "CMDACTIVE"))
   (command pause)
   (princ "\nSpecify next point or [Length/Undo]: ")
   ); end while
 (if
   (not
     (equal lEnt(entlast)))
(progn
  (setq lEnt(entlast)
        stLst(asmi-LayersUnlock))
  (command "_.fillet" "_r" duct:pWd)
  (command "_.fillet" "_p" lEnt)
  (setq lEnt
	 (vlax-ename->vla-object lEnt)
	pl1(car(vlax-safearray->list
	     (vlax-variant-value
	       (vla-Offset lEnt (/ duct:pWd 2)))))
	pl2(car(vlax-safearray->list
	     (vlax-variant-value
	       (vla-Offset lEnt (-(/ duct:pWd 2))))))
	vLst1(GetPlineVer
	       (vlax-vla-object->ename pl1))
	vLst2(GetPlineVer
	       (vlax-vla-object->ename pl2))
	); end setq
  (vla-put-ConstantWidth pl1 0.0)
  (vla-put-ConstantWidth pl2 0.0)
  (vla-Delete lEnt)
  (asmi-LayersStateRestore stLst)
  (foreach itm vLst1
    (command "._line" itm (car vLst2) "")
    (setq vLst2(cdr vLst2))
    ); end foreach
  ); end progn
   ); end if
 (vla-EndUndoMark actDoc)
 (setvar "CMDECHO" oldEch)
 (setvar "FILLMODE" oldFil)
 (setvar "PLINEWID" oldWid)
 (princ)
 ); end of c:duct 
