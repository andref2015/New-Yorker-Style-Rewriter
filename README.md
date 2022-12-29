# New Yorker Style Rewriter
This is a Google Apps Script that allows you to rewrite selected text in a Google Doc using OpenAI's API. Simply select the text you want to rewrite, open the script's sidebar, and choose a writing style to apply to the text. The rewritten text will be displayed in the sidebar for you to review and insert into your document.

![Twitter_NewYorker](https://user-images.githubusercontent.com/36070121/208753506-93e2b366-7471-4b0c-bded-6c453be7fd44.png)

════════ ⋆★⋆ ════════

To set up this script, you do NOT need to be a tech pro. No coding skills are required — I didn't even know how to code myself when I asked ChatGPT to write the code for me. That's right, I was too lazy to learn how to code, so I just asked a computer to do it for me.

════════ ⋆★⋆ ════════

Here's how to get started:

SETUP FILES  
1. Open a Google Doc. 
2. Select "Extensions" in the top menu, then choose "Apps Script."
3. Rename the Apps Script Project to something like "New Yorker Style Rewriter."
4. From the top left menu, select "Add a File (+)" and choose HTML.
5. Name the new file 'sidebar.'
6. Make sure you have two files in your Apps Script: a 'Code.gs' file and a 'sidebar.html' file.
7. Copy and paste the code from the two files in this repository into the two Apps Script files

════════ ⋆★⋆ ════════

SETUP YOUR OPENAI API KEY  
1. Go to https://beta.openai.com/account/api-keys and copy your API key.  
2. Paste your API key into the "apiKey" variable in 'Code.gs'. 

════════ ⋆★⋆ ════════

RUN THE SCRIPT  
1. Click on "Save project". 
2. In the 'Code.gs' file, click "Run" in the menu at the top and grant the necessary permissions when prompted.  
3. Go to the Google Doc you added this script to.  
4. Click "Extensions" in the top menu and select the name of this script.  
5. A sidebar will open on the right. Select the text you want to rewrite, then click "Rewrite" in the sidebar.  

════════ ⋆★⋆ ════════

Enjoy the magic! ❤️

════════ ⋆★⋆ ════════

In the event of any issues, try these steps to troubleshoot:
1. Make sure you have correctly added your API key to the "Code.gs" file and granted the necessary permissions to the Apps Script.
2. Verify that you have added a payment method for OpenAI by going to your profile in the top right corner -> selecting "Manage Account" -> navigating to the "Billing" tab -> and selecting "Payment Methods".
3. If the "Rewrite" button is not functioning, try using the script in an Incognito window (or Sign Out of all your Google accounts, then login again).
4. If the issue persists, try logging in to the script from a different Google account and granting permissions again.
5. If the issue still persists, try refreshing the webpage and reopening the script.
6. If you need further assistance, don't hesitate to contact andre@quizmanity.org for guidance.
