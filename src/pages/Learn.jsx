import React, { useState } from "react";
import LessonCard from "../components/LessonCard";

const lessonData = {
  Spanish: ["Basic Phrases", "Common Verbs", "Numbers & Colors"],
  French: ["Pronunciation", "Grammar Essentials", "French Culture"],
  German: ["Sentence Structure", "Speaking Practice", "Listening Skills"],
  Japanese: ["Hiragana & Katakana", "Kanji Basics", "Japanese Conversations"],
  Chinese: ["Tones & Pronunciation", "HSK Vocabulary", "Daily Expressions"],
};

const Learn = () => {
  const [selectedLang, setSelectedLang] = useState("Spanish");

  return (
    <div className="container">
      <h1>Learn {selectedLang}</h1>
      <div className="language-buttons">
        {Object.keys(lessonData).map((lang) => (
          <button key={lang} onClick={() => setSelectedLang(lang)}>
            {lang}
          </button>
        ))}
      </div>
      <div>
        {lessonData[selectedLang].map((lesson, index) => (
          <LessonCard key={index} title={lesson} description={`Learn ${lesson} in ${selectedLang}`} />
        ))}
      </div>
    </div>
  );
};

export default Learn;
