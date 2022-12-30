# New Yorker Style Rewriter
This is an Apps Script that allows you to rewrite selected text in a Google Doc using GPT-3. Simply select the text you want to rewrite, open the script's sidebar, and choose a writing style to apply to the text. The rewritten text will be displayed in the sidebar for you to review and insert into your Doc.

![Twitter_NewYorker](https://user-images.githubusercontent.com/36070121/208753506-93e2b366-7471-4b0c-bded-6c453be7fd44.png)

════════ ⋆★⋆ ════════

But fear not, you need not be a tech pro to set this script up. No coding skills are required — I didn't even know how to code myself when I asked ChatGPT to write the code for me. That's right, I was too lazy to learn how to code, so I just asked a computer to do it for me. 

While the script itself is free, you will have to pay (small) fees to OpenAI for using GPT-3.

════════ ⋆★⋆ ════════

Here's how to get started:

SETUP FILES  
1. Open a Google Doc and select "Extensions" in the top menu, then choose "Apps Script."
2. Rename the Apps Script Project to something like "New Yorker Style Rewriter."
3. From the top left menu, select "Add a File (+)" and choose HTML.
4. Name the new file 'sidebar.'
5. Make sure you have two files in your Apps Script: a 'Code.gs' file and a 'sidebar.html' file.
6. Copy and paste the code from the two files in this repository ([Code.gs](https://github.com/andref2015/New-Yorker-Style-Rewriter/blob/main/Code.gs) and [sidebar.html](https://github.com/andref2015/New-Yorker-Style-Rewriter/blob/main/sidebar.html)) into the two Apps Script files.

════════ ⋆★⋆ ════════

SETUP YOUR OPENAI API KEY  
1. Go to https://beta.openai.com/account/api-keys and copy your API key.  
2. Paste your API key into the "apiKey" variable in 'Code.gs'. 
3. Verify that you have added a payment method for OpenAI by going to https://beta.openai.com/account/billing/payment-methods.

════════ ⋆★⋆ ════════

RUN THE SCRIPT  
1. Click on "Save project". 
2. In the 'Code.gs' file, click "Run" in the menu at the top and grant the necessary permissions when prompted.  
3. Go to the Google Doc you added this script to.  
4. Click "Extensions" in the top menu and select the name of this script.  
5. A sidebar will open on the right. Select the text you want to rewrite, then click "Rewrite" in the sidebar.  

Please note that this script must be set up for every individual Google Doc that you want to use it in. 

════════ ⋆★⋆ ════════

🪄
Enjoy the magic! 

I recommend trying out the style of William Zinsser. ;)

════════ ⋆★⋆ ════════

In the event of any issues, try these steps to troubleshoot:
1. Make sure you have correctly added your API key to the "Code.gs" file 
2. Verify that you have added a payment method for OpenAI by going to https://beta.openai.com/account/billing/payment-methods.
3. Ensure that you have granted the required permissions to the Apps Script by running the code in main.gs.
4. If the "Rewrite" button is not functioning, try:  
  -Refreshing the webpage and reopening the script,  
  -Using the script in an Incognito window,  
  -Signing Out of all your Google accounts, then login again.  

════════ ⋆★⋆ ════════

If any issues arise, don't hesitate to reach out to me at andre@quizmanity.org.
