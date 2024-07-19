const { test, expect } = require('@playwright/test');

test.describe('Header Tags Verification', () => {
  test('Verify h1, h2, and h3 tags have specific text', async ({ page }) => {
    // Navigate to the website
    await page.goto('http://127.0.0.1:5500/index.html');

    // Verify h1 tag text
    const h1Text = await page.textContent('h1');
    expect(h1Text).toBe('Jane Doe');

    // Verify h2 tag text
    const h2Text = await page.textContent('h3');
    expect(h2Text).toBe('Career Objective');

    // Verify h3 tag text
    const h3Text = await page.textContent('h4');
    expect(h3Text).toBe('Programming Languages');


    // Verify table structure
    const tableExists = await page.$('table');
    expect(tableExists).not.toBeNull();

    const trExists = await page.$('table tr');
    expect(trExists).not.toBeNull();

    const thExists = await page.$('table tr th');
    expect(thExists).not.toBeNull();



  });
});
