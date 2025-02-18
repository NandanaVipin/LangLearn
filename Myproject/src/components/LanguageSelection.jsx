import React, { useState } from "react";
import "./LanguageSelection.css";

const resources = {
  Spanish: ["Duolingo", "BBC Spanish", "SpanishDict"],
  French: ["FluentU", "TV5Monde", "Frantastique"],
  German: ["Goethe Institut", "GermanPod101", "BBC German"],
  Japanese: ["NHK World", "Tae Kim's Guide", "WaniKani"],
  Chinese: ["Yoyo Chinese", "HSK Academy", "MandarinX"],
};

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="container">
      <h2>🌍 Select a Language</h2>
      <div className="language-buttons">
        {Object.keys(resources).map((lang) => (
          <button key={lang} onClick={() => setSelectedLanguage(lang)}>
            {lang}
          </button>
        ))}
      </div>

      {selectedLanguage && (
        <div className="resources">
          <h3>📚 Resources for {selectedLanguage}:</h3>
          <ul>
            {resources[selectedLanguage].map((resource, index) => (
              <li key={index}>
                <a href={`https://www.google.com/search?q=${resource}`} target="_blank" rel="noopener noreferrer">
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelection;
