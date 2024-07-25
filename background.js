chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({
    targetLanguage: 'en' // Set default target language to English
  });
});