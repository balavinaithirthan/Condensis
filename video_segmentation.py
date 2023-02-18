# importing the necessary libraries
import cv2
import numpy as np
import datetime
 
arr = []

#################### Setting up the file ################

videoFile = "l1.mp4"
vidcap = cv2.VideoCapture(videoFile)
frame_counter = 0

success_prev, image_prev = vidcap.read()
frame_counter += 1

success_next, image_next = vidcap.read()
frame_counter += 1

#################### Setting up parameters ################
frames = vidcap.get(cv2.CAP_PROP_FRAME_COUNT)
fps = vidcap.get(cv2.CAP_PROP_FPS)
  
# calculate duration of the video
seconds = round(frames / fps)
video_time = datetime.timedelta(seconds=seconds)

#################### Initiate Process ################

while (success_prev & success_next):
    dest_xor = cv2.bitwise_xor(image_prev, image_next, mask = None)
    number_of_white_pix = np.sum(dest_xor == 255)
    cv2.imshow('Bitwise XOR', dest_xor)
    if (number_of_white_pix > 100): # random threshold
        arr.append(seconds * frame_counter)

    success_prev, image_prev = vidcap.read()
    frame_counter += 1

    success_next, image_next = vidcap.read()
    frame_counter += 1
        
vidcap.release()
print("Complete")
 
# Closes all the windows currently opened.
cv2.destroyAllWindows()