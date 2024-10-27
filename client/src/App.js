import React, { useState } from "react";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const generateComedyVideo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/comedy/generate-video",
        { theme },
        { responseType: "blob" }
      );
      const url = URL.createObjectURL(
        new Blob([response.data], { type: "video/mp4" })
      );
      setVideoUrl(url);
    } catch (error) {
      console.error("Error generating comedy video:", error);
    }
  };

  return (
    <>
      <div className="body-bg"> </div>
      <div className="App">
        <h1>Comedy Video Generator</h1>
        <input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Enter a comedy theme"
        />
        <button onClick={generateComedyVideo}>Generate Comedy Video</button>{" "}
        {videoUrl && (
          <div>
            <h2>Your Comedy Video</h2>
            <video src={videoUrl} controls style={{ width: "100%" }} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
