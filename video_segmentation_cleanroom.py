# %%
import cv2
import numpy as np
import matplotlib.pyplot as plt

vid = cv2.VideoCapture('l1.mp4')

(success, next_image), prev_image = vid.read(), None
(success, next_image), prev_image = vid.read(), next_image

frame_no = 1

metric = []

# %%
while success and frame_no < 1000:
    (success, next_image), prev_image = vid.read(), next_image
    metric.append(np.mean(np.uint64(np.bitwise_xor(prev_image, next_image))))
    frame_no += 1

# %% 

plt.plot(range(len(metric)), metric)
plt.show()