const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto('http://127.0.0.1:5500/index.html');

});

test.describe('Website Verification', () => {
  test('Verify style tag, score and profile', async ({ page }) => {
    // Check if style tag exists
    const styleTag = await page.$('style');
    expect(styleTag).not.toBeNull();

    // Get the content of the style tag
    const styleContent = await page.textContent('style');
    expect(styleContent).toContain('#score');
    expect(styleContent).toContain('.profile');

    
  });

  test('Verify Contact Me Heading h3 tag', async ({ page }) => {
   
    // Verify h3 tag with 'Contact me' text
    await page.locator('#contact',{hasText:' Contact me'});

   
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
