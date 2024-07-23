const { test, expect } = require('@playwright/test');

test.describe('Link Tag Verification', () => {
  test('Verify link tag with href to css/mystyle.css', async ({ page }) => {
    // Navigate to the website
    await page.goto('http://127.0.0.1:5500/index.html');

    // Check if link tag with specific href exists
    const linkTag = await page.$('link[href="css/mystyle.css"]');
    expect(linkTag).not.toBeNull();
  });

  
  test('Verify Contact Me Form for text field, text area and submit button', async ({ page }) => {
   
    // Verify form structure
    const form = await page.$('form');
    expect(form).not.toBeNull();

    const inputField = await page.$('form input[type="text"]');
    expect(inputField).not.toBeNull();

    const textArea = await page.$('form textarea');
    expect(textArea).not.toBeNull();

    const submitButton = await page.$('form button[type="submit"], form input[type="submit"]');
    expect(submitButton).not.toBeNull();
  });
});
