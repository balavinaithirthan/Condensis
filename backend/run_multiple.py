import os

import extract_mp3

PATH = "/Volumes/NO NAME/"
for f in os.listdir(PATH):
    if f[0] != "L":
        continue
    print("getting notes from", f)
    extract_mp3.getChunks(PATH + f, PATH + "output/"+f.split(".")[0] + ".txt")
