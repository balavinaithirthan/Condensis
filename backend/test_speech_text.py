from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
import os
import googleapiclient.discovery
import time
# The ID of a sample document.
DOCUMENT_ID = '195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE'
def transcribe_gcs3(gcs_uri):
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

    while (not operation.done()):
        pass
    response = operation.result()
    print("RESPONSE",response.results)
    for result in response.results:
        # The first alternative is the most likely one for this portion.
        print("Transcript: {}".format(result.alternatives[0].transcript))
        print(result.alternatives[0])
def transcribe_gcs2(gcs_uri):

    service = googleapiclient.discovery.build('speech', 'v1')
    service_request = service.speech().longrunningrecognize(
        body={
            "config": {
                "encoding": "LINEAR16",
                "languageCode": "en-US",
                "sampleRateHertz": 44100,
                "audio_channel_count": 2,
                "enableWordTimeOffsets": True
            },
            "audio": {
                "uri": str(gcs_uri)
            }
        }
    )
    operation = service_request.execute()
    print("service request", service_request)

    name = operation['name']
    service_request2 = service.operations().get(name=name)

    while True:

        # Give the server a few seconds to process.

        # print('Waiting for server  processing...')

        time.sleep(1)

        # Get the long running operation with response.

        response = service_request2.execute()

        if 'done' in response and response['done']:
            break
    print("finished")
    print("operation", service.operation().result())
    return response
def transcribe_gcs(gcs_uri):
    """Asynchronously transcribes the audio file specified by the gcs_uri."""
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

    print("Waiting for operation to complete...")
    response = operation.result(timeout=10000)

    # Each result is for a consecutive portion of the audio. Iterate through
    # them to get the transcripts for the entire audio file.
    for result in response.results:
        # The first alternative is the most likely one for this portion.
        print("Transcript: {}".format(result.alternatives[0].transcript))
        print(result.alternatives[0])

        # print("Confidence: {}".format(result.alternatives[0].confidence))

if __name__ == "__main__":
    # creds = None
    # # The file token.json stores the user's access and refresh tokens, and is
    # # created automatically when the authorization flow completes for the first
    # # time.
    #
    # if os.path.exists('token.json'):
    #     creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # # If there are no (valid) credentials available, let the user log in.
    # if not creds or not creds.valid:
    #     if creds and creds.expired and creds.refresh_token:
    #         creds.refresh(Request())
    #     else:
    #         flow = InstalledAppFlow.from_client_secrets_file(
    #             'credentials.json', SCOPES)
    #         creds = flow.run_local_server(port=0)
    #     # Save the credentials for the next run
    #     with open('token.json', 'w') as token:
    #         token.write(creds.to_json())
    #
    # try:
        # service = build('docs', 'v1', credentials=creds)

        # Retrieve the documents contents from the Docs service.
        # document = service.documents().get(documentId=DOCUMENT_ID).execute()

        # print('The title of the document is: {}'.format(document.get('title')))
    # creds = Credentials.from_authorized_user_file('condensis-ba66e5d3b00d.json', SCOPES)

    transcribe_gcs("gs://video_inputs/audio/1bacf0fe-c016-4e24-8b25-b3f5d301f5b7/audio_clip_1.wav")
    # except HttpError as err:
    #     print(err)

