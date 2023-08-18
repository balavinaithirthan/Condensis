# Condensis: Convert Lecture Videos into Lecture Notes

**Condensis** is a cutting-edge web application designed to bridge the gap between lecture videos and comprehensive lecture notes. Recognizing the challenges faced by students with accessibility issues and those who struggle with note-taking, Condensis leverages innovative technology to automatically transcribe and organize lecture content. Our journey involved overcoming obstacles, iterating on ideas, and ultimately developing a solution that transforms the way students engage with educational materials.

## Table of Contents

- [Introduction](#introduction)
- [Challenges Faced](#challenges-faced)
- [Problem Statement](#problem-statement)
- [How Condensis Works](#how-condensis-works)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In the realm of education, accessibility often takes a backseat, leaving students with diverse needs struggling to keep up. Condensis addresses this concern by providing a platform that automatically generates detailed lecture notes from lecture videos. By combining technological innovation with the need for accessible educational resources, Condensis aims to empower students to focus on understanding the material rather than grappling with note-taking challenges.

## Challenges Faced

Our journey began with a novel idea: turning lecture videos into transcripts and using GPT-3 to create lecture notes. However, the sheer volume of a transcript from a 60-90 minute video proved too much for GPT-3. We evolved our approach, incorporating slide data to segment videos and organize notes by topic shifts. Despite challenges in video processing and technology integration, we persevered, embracing neural networks and cloud-based services to refine our solution.

## Problem Statement

Education policies and infrastructure often neglect students with accessibility needs, leaving them struggling to take notes in class. Offices of Accessible Education (OAE) have made efforts to support these students, but limited resources and low student interest in becoming notetakers hinder their effectiveness. Condensis aims to provide accessible, comprehensive, and accurate lecture notes to all students, ensuring that no one is left behind due to accessibility challenges.

## How Condensis Works

1. **Slide Transition Detection**: Neural networks are employed to identify slide transitions in lecture videos, enabling the segmentation of videos into distinct topics.

2. **Audio Transcription**: Google Cloud's Speech to Text API is utilized to transcribe the audio content of each video segment.

3. **Note Generation**: Combining transcribed audio with detected slide changes, Condensis generates well-structured, topic-based lecture notes.

4. **Web Interface**: Condensis provides an intuitive web interface for users to upload lecture videos, receive automated lecture notes, and customize their notes as needed.

## Installation

1. Clone the Condensis repository to your local environment:

   ```bash
   git clone https://github.com/yourusername/condensis.git
   cd condensis
   ```

2. Set up the required dependencies and frameworks.

## Usage

1. Visit the Condensis web application through your preferred web browser.

2. Upload the lecture video you want to convert into lecture notes.

3. Let Condensis process the video, transcribe audio, detect slide transitions, and generate comprehensive lecture notes.

## Contributing

We welcome contributions from the community! If you're interested in improving Condensis, please review our [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

---

For inquiries or suggestions, please contact [your name/email here]. Condensis is your solution to accessible and comprehensive lecture notes.
