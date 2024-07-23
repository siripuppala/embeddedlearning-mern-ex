const { test, expect } = require('@playwright/test');

test.describe('Website Contact form Verification', () => {
  test('Verify style tag, h3 tag, and form structure', async ({ page }) => {
    // Navigate to the website
    await page.goto('http://127.0.0.1:5500/index.html');

    // Verify h3 tag with 'Contact me' text
    const h3Text = await page.textContent('h3');
    expect(h3Text).toBe('Contact me');

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
