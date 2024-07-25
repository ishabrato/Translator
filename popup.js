document.getElementById('saveButton').addEventListener('click', function() {
  const targetLanguage = document.getElementById('targetLanguage').value;
  chrome.storage.sync.set({
    targetLanguage: targetLanguage
  }, function() {
    console.log('Target language set to: ' + targetLanguage);
  });
});

chrome.storage.sync.get('targetLanguage', function(data) {
  document.getElementById('targetLanguage').value = data.targetLanguage;
});