3.Dimension below note- NDIM


 (Defun C:NDIM ()
  (setq DIM_OV nil)
  (setq DIM_PFX nil)
  (setq DIM_ENT nil)
  (setq	DIM_ENT
	 (entsel "\n Select dimension string to add the note under:")
  )

  (setq DIM_PROPS (entget (car DIM_ENT)))
					;GET DXF CODES FOR THIS DIM ENTITY
;;;

  (if (null ADD_NOTE_VALUE)
    (setq ADD_NOTE "VIF")
  )					;THIS SETS THE INITIAL DEFAULT VALUE FOR THE TEXT THAT APPEARS IN THE COMMAND LINE
  (if ADD_NOTE_VALUE
    (setq ADD_NOTE ADD_NOTE_VALUE)
  )					;THIS ALLOWS THE PREVIOUS TEXT VALUE TO BECOME THE NEW DEFAULT AT THE COMMAND LINE		

  (setq	ADD_NOTE_VALUE
	 (getstring
	   (strcat "\nWhat note to add under the dimension? <"
		   ADD_NOTE
		   ">: "
	   )				;THIS DEFINES THE COMMAND PROMPT 
	 )
  )
  (if (= ADD_NOTE_VALUE "")
    (setq ADD_NOTE_VALUE ADD_NOTE)
  )					;THIS LETS THE USER JUST HIT "ENTER" AT THE COMMAND LINE TO ACCEPT THE DEFAULT TEXT VALUE DISPLAYED



  (setq DIM_OV (cdr (assoc 1 DIM_PROPS)))
					;GET THE TEXT OVERRIDE VALUE FOR THE DIMENSION ENTITY

  (if (= DIM_OV "")
    (setq DIM_PFX "<>")
    (setq DIM_PFX DIM_OV)
  )					;IF THERE IS NO OVERRIDE, USE DIM MEASUREMENT, ELSE USE THE DIMENSION TEXT OVERRIDE VALUE

  (setq NEWDIMVALUE (strcat DIM_PFX "\\X" ADD_NOTE_VALUE))
					;BUILD THE STRING OF DIM MEASUREMENT / TEXT OVERRIDE AND NOTE TEXT TO PUT UNDER DIMENSION LINE
  (command "dimedit" "n" NEWDIMVALUE DIM_ENT "")
					;EDIT THE DIMENSION ENTITY


)					;END DEFUN
(prompt "\n NOTEDIM.LSP loaded. Start command with NDIM ")
(princ)

