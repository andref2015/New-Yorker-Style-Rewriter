// Go to https://beta.openai.com/account/api-keys and copy your API key.
// Paste your API key into the code below, replacing the "___" in the "apiKey" variable.

var apiKey = "sk-______________________________________________";

// Follow the instructions in the 'readme' file


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
