function translateText(text, targetLanguage) {
  const apiKey = ''; // Replace with your Google Translate API key
  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const data = {
    q: text,
    target: targetLanguage
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.data && data.data.translations && data.data.translations.length > 0) {
        return data.data.translations[0].translatedText;
      }
      return text; // Return original text if translation fails
    })
    .then(translatedText => {
      element.textContent = translatedText;
    });
}

chrome.storage.sync.get('targetLanguage', function(data) {
  const targetLanguage = data.targetLanguage;
  const elements = document.querySelectorAll('*');

  elements.forEach(element => {
    if (element.textContent) {
      translateText(element.textContent, targetLanguage);
    }
  });
});