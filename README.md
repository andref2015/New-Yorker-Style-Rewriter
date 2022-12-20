# New Yorker Style Rewriter
This is a Google Apps Script that allows you to rewrite selected text in a Google Doc using OpenAI's API. Simply select the text you want to rewrite, open the script's sidebar, and choose a writing style to apply to the text. The rewritten text will be displayed in the sidebar for you to review and insert into your document.

![Twitter_NewYorker](https://user-images.githubusercontent.com/36070121/208753506-93e2b366-7471-4b0c-bded-6c453be7fd44.png)

To use this script, follow these steps:
1. Open a Google Doc
2. Select "Extensions" in the top menu, then choose "Apps Script."
3. Rename the Apps Script Project to something like "New Yorker Style Rewriter."
4. From the top left menu, select "Add a File (+)" and choose HTML.
5. Name the new file 'sidebar.'
6. Make sure you have two files in your Apps Script: a 'Code.gs' file and a 'sidebar.html' file.
7. Copy and paste the code from the two files in this repository into the two Apps Script files
8. Go to https://beta.openai.com/account/api-keys and copy your API key.
9. Paste your API key into the "apiKey" variable in 'Code.gs'
10. Click on "Save project".
11. In the 'Code.gs' file, click "Run" in the menu at the top and grant the necessary permissions when prompted.
12. Go to the Google Doc you added this script to.
13. Click "Extensions" in the top menu and select the name of this script.
14. A sidebar will open on the right. Select the text you want to rewrite, then click "Rewrite" in the sidebar.


Enjoy the magic! <3


In case of issues:
1. If you click on "Rewrite text" and nothing happens, it's either because you didn't add the apiKey above, or because you didn't grant the right permissions to this Apps Script.
2. Try logging into this script from a different Google account, then click "Run" and it should ask you for permissions. Grant the permissions, then try using the script again in the Google Doc.
3. For further guidance, contact andre@quizmanity.org.
