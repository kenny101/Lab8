# Lab8_Starter
Author: Kenny Chan

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

   1. Within a Github action that runs whenever code is pushed

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No, I wouldn't because writing and sending messages should be tested with their own individual unit tests as they are separate features. Writing a message may work but sending a message might not so it might be more organized to have their own unit tests to distinguish features that are working from ones that are not.
3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   Yes, I would use a unit test to test this as it is a feature which is not likely depend on other parts of code.
4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   If we run our puppeteer tests with headless set to true, the tests would run but it wouldn't display on the browser's UI
5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   ```
   beforeAll(async() =>{
       await page.goto('http://127.0.0.1:5500'); 
       await page.click('img');
   });
   ```
