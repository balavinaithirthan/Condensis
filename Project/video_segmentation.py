# importing the necessary libraries
import cv2
import numpy as np
import datetime
import matplotlib.pyplot as plt
 
arr = []
arrx = []
arry = []

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


#################### Initiate Process ################

while (success_prev & success_next):
    dest_xor = cv2.bitwise_xor(image_prev, image_next, mask = None)
    number_of_total_pix = np.sum(dest_xor >= 0)
    number_of_changed_pix = np.sum(dest_xor > 0)
    if (number_of_changed_pix/number_of_total_pix > 0.57): # random threshold
        arr.append(frame_counter * (1/fps))
    arrx.append(frame_counter * (1/fps))
    arry.append(number_of_changed_pix/number_of_total_pix)

    success_prev, image_prev = vidcap.read()
    frame_counter += 1

    success_next, image_next = vidcap.read()
    frame_counter += 1
        
vidcap.release()
print("Complete")

plt.plot(arrx, arry)

plt.xlabel('x: seconds in video')
plt.ylabel('y: percent of pixels changed')

plt.title('Slide Change Detection')
plt.show()
 
# Closes all the windows currently opened.
cv2.destroyAllWindows()