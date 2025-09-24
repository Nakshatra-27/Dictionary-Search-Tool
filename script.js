async function searchWord() {
  const word = document.getElementById("wordInput").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "<p>🔍 Searching...</p>";

  if (!word) {
    resultDiv.innerHTML = '<p>❗ Please enter a word.</p>';
    return;
  }

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    if (data.title === "No Definitions Found") {
      resultDiv.innerHTML = '<p>❌ No definition found.</p>';
      return;
    }

    const entry = data[0];
    const meaning = entry.meanings[0];
    const definition = meaning.definitions[0].definition;
    const example = meaning.definitions[0].example || "No example available.";
    const partOfSpeech = meaning.partOfSpeech;
    const phonetics = entry.phonetics.find(p => p.audio);

    resultDiv.innerHTML = `
      <h2>${entry.word}</h2>
      <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
      <p><strong>Definition:</strong> ${definition}</p>
      <p><strong>Example:</strong> ${example}</p>
      ${phonetics ? `<audio controls src="${phonetics.audio}"></audio>` : ''}
    `;
  } catch (error) {
    resultDiv.innerHTML = '<p>⚠️ Error fetching data. Please try again later.</p>';
    console.error(error);
  }
}
async function searchWord() {
  const word = document.getElementById("wordInput").value.trim();
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = "<p>🔍 Searching...</p>";

  if (!word) {
    resultDiv.innerHTML = '<p>❗ Please enter a word.</p>';
    return;
  }

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();

    if (data.title === "No Definitions Found") {
      resultDiv.innerHTML = '<p>❌ No definition found.</p>';
      return;
    }

    const entry = data[0];
    const meaning = entry.meanings[0];
    const definition = meaning.definitions[0].definition;
    const example = meaning.definitions[0].example || "No example available.";
    const partOfSpeech = meaning.partOfSpeech;
    const phonetics = entry.phonetics.find(p => p.audio);

    resultDiv.innerHTML = `
      <h2>${entry.word}</h2>
      <p><strong>Part of Speech:</strong> ${partOfSpeech}</p>
      <p><strong>Definition:</strong> ${definition}</p>
      <p><strong>Example:</strong> ${example}</p>
      ${phonetics ? `<audio controls src="${phonetics.audio}"></audio>` : ''}
    `;
  } catch (error) {
    resultDiv.innerHTML = '<p>⚠️ Error fetching data. Please try again later.</p>';
    console.error(error);
  }
}
