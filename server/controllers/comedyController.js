const { Configuration, OpenAIApi } = require("openai");
const { TextToSpeechClient } = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");
const FFmpeg = require("fluent-ffmpeg");
require("dotenv").config();

// Initialize OpenAI and Google Text-to-Speech clients
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);
const textToSpeechClient = new TextToSpeechClient();

async function generateComedyVideo(req, res) {
  const { theme } = req.body;

  try {
    // Step 1: Generate Comedy Script
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a funny comedy sketch based on the theme: ${theme}`,
      max_tokens: 200,
    });
    const script = response.data.choices[0].text.trim();

    // Step 2: Text-to-Speech
    const ttsRequest = {
      input: { text: script },
      voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "MP3" },
    };
    const [ttsResponse] = await textToSpeechClient.synthesizeSpeech(ttsRequest);
    const audioFile = "output_audio.mp3";
    await util.promisify(fs.writeFile)(
      audioFile,
      ttsResponse.audioContent,
      "binary"
    );

    // Step 3: Generate Video (using a mock animation API or placeholder background)
    const videoFile = "output_video.mp4";
    FFmpeg()
      .input("background.jpg") // Placeholder background
      .input(audioFile)
      .output(videoFile)
      .on("end", () => {
        console.log("Video generated successfully");
        res.sendFile(videoFile, { root: __dirname });
      })
      .run();
  } catch (error) {
    console.error("Error generating video:", error);
    res.status(500).json({ error: "Failed to generate video" });
  }
}

module.exports = { generateComedyVideo };
