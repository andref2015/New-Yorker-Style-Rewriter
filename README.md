# Google-Docs-Text-Rewriter-Script
This is a Google Apps Script that allows you to rewrite selected text in a Google Doc using OpenAI's API. Simply select the text you want to rewrite, open the script's sidebar, and choose a writing style to apply to the text. The rewritten text will be displayed in the sidebar for you to review and insert into your document.

To use this script, follow these steps:
1. Open a Google Doc
2. Click on "Extensions" in the top menu and select "Apps Script"
3. Rename the Apps Script as you wish, for example "AI Rewriter"
4. Make sure you have two files in your Apps Script: a 'code.gs' file and a 'sidebar.html' file.
5. Copy and paste the code from the two files in this repository into the two Apps Script files
6. Go to https://beta.openai.com/account/api-keys and copy your API key.
7. Paste your API key into the "apiKey" variable in code.gs
8. Click on "Save project".
9. Click "Run" and grant the necessary permissions when prompted.
10. Go to the Google Doc you added this scipt to.
11. Click "Extensions" in the top menu and select the name of this script.
12. A sidebar will open on the right. Select the text you want to rewrite, then click "Rewrite text" in the sidebar.

In case of issues:
-If you click on "Rewrite text" and nothing happens, it's either because you didn't add the apiKey above, or because you didn't grant the right permissions to this Apps Script.
-Try logging into this script from a different Google account, then click "Run" and it should ask you for permissions. Grant the permissions, then try using the script again in the Google Doc.
-For further guidance, contact andre@quizmanity.org.
