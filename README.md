Comedy AI- generators video
This project is a comedy video generator web app that creates humorous videos based on user-provided themes. It leverages OpenAI for script generation, text-to-speech synthesis, and video generation tools to deliver engaging, custom content.

Features
AI-Powered Script Generation: Generates comedy scripts based on user-provided themes using OpenAI.

Text-to-Speech: Converts generated scripts into audio using Google Cloud TTS or alternative solutions.

Video Generation: Integrates audio with video, adding a background and overlay for a complete video experience.

-User-Friendly UI: Simple and intuitive interface for theme input and video display.

Tech Stack
Client: React, CSS (custom styling to resemble YouTube’s theme)

Server: Node, Express.

AI Integration: OpenAI API.

**Text-to-Speech:**Google Cloud TTS API (or alternatives like ElevenLabs or IBM Watson TTS)

**Video Processing:**FFmpeg (using fluent-ffmpeg for Node.js)

setUP
-Node.js and npm installed.

-FFmpeg installed (required for video processing).

-Installation guide for FFmpeg.

-OpenAI Account (for API key).

-Google Cloud Account (for Text-to-Speech API, optional)

Usage
Start the Backend Server

cd server

npm start

Start the Frontend Server

cd client

npm start


