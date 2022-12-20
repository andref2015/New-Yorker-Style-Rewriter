// To use this script, follow these steps
// 1. Make sure you have two files in this Apps Script: this file (code.gs) and a 'sidebar.html' file.
// 2. Go to https://beta.openai.com/account/api-keys and copy your API key.
// 3. Paste your API key into the code below, replacing the "___" in the "apiKey" variable.

var apiKey = "sk-______________________________________________";

// 4. Click on "Save project".
// 5. Click "Run" and grant the necessary permissions when prompted.
// 6. Go to the Google Doc you added this scipt to.
// 7. Click "Extensions" in the top menu and select the name of this script.
// 8. A sidebar will open on the right. Select the text you want to rewrite, then click "Rewrite text" in the sidebar.


// In case of issues:
// If you click on "Rewrite text" and nothing happens, it's either because you didn't add the apiKey above, or because you didn't grant the right permissions to this Apps Script.
// Try logging into this script from a different Google account, then click "Run" and it should ask you for permissions. Grant the permissions, then try using the script again in the Google Doc.
// For further guidance, contact andre@quizmanity.org.


function onOpen(e) {
  // Add a menu with some items, some separators, and a sub-menu.
  DocumentApp.getUi().createAddonMenu()
      .addItem('Rewrite Text', 'openSidebar')
      .addToUi();
}

function openSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('Rewrite Text')
      .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

function getText (writing_style) {
  var selection = DocumentApp.getActiveDocument().getSelection();
    const text = [];
    if (selection) {
    const elements = selection.getSelectedElements();
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].isPartial()) {
        const element = elements[i].getElement().asText();
        const startIndex = elements[i].getStartOffset();
        const endIndex = elements[i].getEndOffsetInclusive();

        text.push(element.getText().substring(startIndex, endIndex + 1));
      } else {
        const element = elements[i].getElement();
        // Only translate elements that can be edited as text; skip images and
        // other non-text elements.
        if (element.editAsText) {
          const elementText = element.asText().getText();
          // This check is necessary to exclude images, which return a blank
          // text element.
          if (elementText) {
            text.push(elementText);
          }
        }
      }
    }
  }
  if (!text.length) throw new Error('Please select some text.');
  
  let return_text = rewriteText(text, writing_style);
  return return_text;
}


function rewriteText(info, writing_style) {
  var url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
  
  var promptText = "Rewrite this in the style of " + writing_style + ": "
  var promptText2 = info;

  var data = {
    "prompt": promptText + promptText2,
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0.75,
    "presence_penalty": 0
  };

  var options = {
    "method" : "post",
    "contentType" : "application/json",
    "headers": {
      "Authorization": "Bearer " + apiKey
    },
    "payload" : JSON.stringify(data)
  };

  var response = UrlFetchApp.fetch(url, options);
  var openAiResponse = JSON.parse(response.getContentText());
  var rewrittenText = openAiResponse['choices'][0]['text'];

  return rewrittenText;
}
