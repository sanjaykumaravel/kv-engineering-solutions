;; Define a new command called "SUNWINDOW"
(defun c:SUNWINDOW ()
  ;; --- Get User Input ---
  (setq pt1 (getpoint "\nSpecify first corner of window opening: "))
  (setq pt2 (getcorner pt1 "\nSpecify opposite corner: "))
  (setq wall_thickness (getreal "\nEnter wall thickness: "))
  (setq sunshade_projection (getreal "\nEnter sunshade projection: "))

  ;; --- Calculate Window Opening Coordinates ---
  (setq x1 (car pt1))
  (setq y1 (cadr pt1))
  (setq x2 (car pt2))
  (setq y2 (cadr pt2))

  ;; Ensure consistent point order for drawing
  (if (> x1 x2) (setq temp x1 x1 x2 x2 temp))
  (if (> y1 y2) (setq temp y1 y1 y2 y2 temp))

  ;; --- Draw Outer Window Opening (Wall Cutout) ---
  (command "_.RECTANGLE" (list x1 y1) (list x2 y2))

  ;; --- Calculate Midpoint for Frame Reference ---
  (setq mid_x (/ (+ x1 x2) 2.0))
  (setq mid_y (/ (+ y1 y2) 2.0))

  ;; --- Draw Window Frame (Assuming a simple frame within the wall) ---
  (setq frame_offset (/ wall_thickness 4.0)) ;; Example offset
  (setq frame_x1 (+ x1 frame_offset))
  (setq frame_y1 (+ y1 frame_offset))
  (setq frame_x2 (- x2 frame_offset))
  (setq frame_y2 (- y2 frame_offset))
  (command "_.RECTANGLE" (list frame_x1 frame_y1) (list frame_x2 frame_y2))

  ;; --- Draw Window Sashes (simple representation) ---
  (command "_.LINE" (list frame_x1 mid_y) (list frame_x2 mid_y) "") ;; Horizontal divider

  ;; --- Draw Sunshade ---
  ;; Assuming the sunshade extends outwards from the top of the window opening.
  ;; You can adjust the direction based on your desired orientation (top, bottom, sides).
  (setq sunshade_p1 (list x1 (+ y2 sunshade_projection)))
  (setq sunshade_p2 (list x2 (+ y2 sunshade_projection)))
  (setq sunshade_p3 (list x2 y2))
  (setq sunshade_p4 (list x1 y2))

  (command "_.PLINE" sunshade_p1 sunshade_p2 sunshade_p3 sunshade_p4 "C")

  (princ "\nWindow with sunshade drawn successfully.")
  (princ)
)