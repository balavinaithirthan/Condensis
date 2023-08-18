import moviepy.editor as mp
from google.cloud import storage
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
import os
import uuid
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import googleapiclient.discovery
import time
CLIP_DURATION = 10 * 60 #in seconds
BASE_PATH = "/Users/sherylhsu/Downloads/"
# Insert Local Video File Path
def transcribe_gcs2(gcs_uri):
    from google.cloud import speech

    client = speech.SpeechClient()

    audio = speech.RecognitionAudio(uri=gcs_uri)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=44100,
        audio_channel_count=2,
        language_code="en-US",
        enable_word_time_offsets=True
    )
    operation = client.long_running_recognize(config=config, audio=audio)

    print(u"Waiting for operation to complete...")

    # def my_callback(future):
    #     future.result()

    # operation.add_done_callback(my_callback)
    return operation

    # while (not operation.done()):
    #     pass
    # response = operation.result()
    # print("RESPONSE", response.results)
    # for result in response.results:
    #     # The first alternative is the most likely one for this portion.
    #     print("Transcript: {}".format(result.alternatives[0].transcript))
    #     print(result.alternatives[0])

def uploadFile(filename, bucket_name):
    client = storage.Client(project='condensis')
    bucket = client.get_bucket('video_inputs')
    # filename = str(uuid.uuid4()) + ".wav"
    blob = bucket.blob("audio/" + bucket_name)
    blob.upload_from_filename(filename)
def splitFile(filename):
    count = 1
    src_duration = int(mp.AudioFileClip(filename).duration) # in seconds, the duration of the original audio
    ID = str(uuid.uuid4())
    if not os.path.exists(BASE_PATH + f'results/{ID}/'):
        os.makedirs(BASE_PATH + f'results/{ID}/')

    for i in range(0, src_duration, CLIP_DURATION):
        ffmpeg_extract_subclip(filename, i, i + CLIP_DURATION,
                               targetname=BASE_PATH + f'results/{ID}/audio_clip_{count}.wav')
        uploadFile(BASE_PATH + f'results/{ID}/audio_clip_{count}.wav', f'{ID}/audio_clip_{count}.wav')

        count += 1

    return ID, count - 1
def compressFile(in_file, out_file):
    clip = mp.VideoFileClip(in_file)

    # Insert Local Audio File Path
    clip.audio.write_audiofile(out_file)
compressFile(BASE_PATH + "L16_ Implementing Abstractions_ Part II_default_254adc72.mp4", BASE_PATH + "lec_4.wav")
count = 9
ID = "39381086-e794-4907-ba1b-a139ae7e3016"

ID, count = splitFile(BASE_PATH + "lec_4.wav")
operations = []
for i in range(1, count + 1):
    print(f"gs://video_inputs/audio/{ID}/audio_clip_{i}.wav")
    s = transcribe_gcs2(f"gs://video_inputs/audio/{ID}/audio_clip_{i}.wav")
    operations.append(s)
print("ID", ID)

done = [False for i in range(0, count)]
still_running = count
results = [None for i in range(0, count)]
while still_running > 0:
    # print("running", still_running)
    time.sleep(1)
    for i in range(0, count):
        if done[i]:
            continue
        if operations[i].done():
            done[i] = True
            results[i] = operations[i].result().results
            still_running -= 1
total_text = ""
chunk = []
times = []
words = []
for i in range(0, count):
    for result in results[i]:
        # The first alternative is the most likely one for this portion.
        total_text += result.alternatives[0].transcript
        for obj in result.alternatives[0].words:
            words.append(obj.word)
            t = [count * CLIP_DURATION + int(obj.start_time.seconds), count * CLIP_DURATION + int(obj.end_time.seconds)]
            times.append(t)
f = open("/Users/sherylhsu/Documents/GitHub/Condensis/backend/words.txt", "w+")
for i in words:
    f.write(i + "\n")
f.close()
f = open("/Users/sherylhsu/Documents/GitHub/Condensis/backend/times.txt", "w+")
for i in times:
    f.write(str(i[0]) + " " + str(i[1]) + "\n")
f.close()
f = open("/Users/sherylhsu/Documents/GitHub/Condensis/backend/total_text.txt", "w+")
f.write(total_text)
f.close()
#
# words = []
# times = []
# f = open("/Users/sherylhsu/Documents/GitHub/Condensis/backend/words.txt", "r")
# for i in f.readlines():
#     words.append(i.strip())
# f = open("/Users/sherylhsu/Documents/GitHub/Condensis/backend/times.txt", "r")
# for i in f.readlines():
#     h = i.strip().split(" ")
#     times.append([int(h[0]), int(h[1])])
# f = open("/Users/sherylhsu/Documents/GitHub/Condensis/backend/total_text.txt", "w+")
# total_text = f.readline()

print(len(words))
print(len(total_text.split(" ")))
print(words[0:10])
print(total_text[0:100])
text_chunks = []
last_chunk = -1
time_stamps = []
for i in range(1, len(times)):
    if times[i][0] - times[i - 1][1] >= 2 and i - last_chunk > 100 or i == len(times) - 1:
        time_stamps.append(int(times[i][0]))
        print("time_stamps", times[i-1], times[i], "i", i)
        text_chunks.append(" ".join(words[last_chunk + 1: i]))
        last_chunk = i
# print("time_stamps", time_stamps)
f = open("/Users/sherylhsu/Documents/GitHub/Condensis/backend/text_chunks.txt", "w+")
for i in text_chunks:
    f.write(i + "\n")
f.close()



# print(total_text)
        # print(result.alternatives[0])
# print("results", results)



# compressFile(BASE_PATH + "Lecture 2_ Counting and Combinatorics_default_d479f6aa.mp4", BASE_PATH + "full.wav")
# uploadFile("/Users/sherylhsu/Downloads/audio_trim.w av")