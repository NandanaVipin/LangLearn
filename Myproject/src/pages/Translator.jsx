import React, { useState } from "react";
import "./Translator.css";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=en|es`; 
    const response = await fetch(apiUrl);
    const data = await response.json();
    setTranslatedText(data.responseData.translatedText);
  };

  return (
    <div className="container">
      <h2>🈳 Language Translator</h2>
      <textarea
        rows="4"
        placeholder="Enter text to translate..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={translateText}>Translate</button>

      {translatedText && (
        <div className="translated-box">
          <h3>Translation:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
