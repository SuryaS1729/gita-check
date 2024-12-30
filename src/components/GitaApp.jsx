import React, { useState } from "react";
import shlokas from "../gita.json";

const GitaApp = () => {
  const [chapter, setChapter] = useState(1);
  const [verse, setVerse] = useState(1);

  // Find the shloka based on the selected chapter and verse
  const filteredShloka = shlokas.find(
    (shloka) => shloka.chapter_number === chapter && shloka.verse_number === verse
  );
//this finds the shlokas
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Bhagavad Gita Shlokas</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Chapter:
          <input
            type="number"
            value={chapter}
            onChange={(e) => setChapter(Number(e.target.value))}
            style={{ marginLeft: "10px", marginRight: "20px" }}
          />
        </label>

        <label>
          Verse:
          <input
            type="number"
            value={verse}
            onChange={(e) => setVerse(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      {filteredShloka ? (
        <div>
          <h2>{filteredShloka.title}</h2>
          <p><strong>Text (Sanskrit):</strong></p>
          <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>{filteredShloka.text}</p>
          <p><strong>Transliteration:</strong></p>
          <p>{filteredShloka.transliteration}</p>
          <p><strong>Word Meanings:</strong></p>
          <p>{filteredShloka.word_meanings}</p>
        </div>
      ) : (
        <p>No shloka found for Chapter {chapter}, Verse {verse}.</p>
      )}
    </div>
  );
};

export default GitaApp;