;remove mask
(defun C:UnMask ( / obj ss ssl)
 ;(setq ss (ssget '((0 . "*TEXT,*LEADER,DIM*")))) ; just the selected
 (setq ss (ssget "_X" '((0 . "*TEXT,*LEADER,DIM*")))) ; from all
 (if ss
  (progn
   (setq ssl (sslength ss))
   (repeat ssl
    (setq ssl (1- ssl))
    (setq obj (vlax-ename->vla-object (ssname ss ssl)))
    (if (vlax-property-available-p obj 'BackgroundFill)(vlax-put obj 'BackgroundFill 0)) ; mtext
    (if (vlax-property-available-p obj 'TextBackgroundFill)(vlax-put obj 'TextBackgroundFill 0)) ; leader
    (if (vlax-property-available-p obj 'TextFill)(vlax-put obj 'TextFill 0)) ; dim
   )
  )
  (princ "\nNo masked texts found.")
 )
 (prin1)
)