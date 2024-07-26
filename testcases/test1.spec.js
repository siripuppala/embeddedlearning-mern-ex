const { test, expect } = require('@playwright/test');


test.beforeEach(async ({page}) => {
  await page.goto('http://127.0.0.1:5500/index.html');

});

test.describe('Header Tag H1 Verification', () => {
  test('Verify h1 tag has specific text', async ({ page }) => {
    // Verify h1 tag text
    const h1Text = await page.textContent('h1');    
    expect(h1Text).toBe('Jane Doe');
  });
});

test.describe('Header Tag h3 Verification', () => {
  test('Verify h3 tag has specific text', async ({ page }) => {

  // Verify h2 tag text
  await page.locator('#career',{hasText:' Career Objective'});

  });
});


test.describe('Table Tags Verification', () => {
  test('Verify table tr and th', async ({ page }) => {
   
    // Verify table structure
    const tableExists = await page.$('table');
    expect(tableExists).not.toBeNull();

    const trExists = await page.$('table tr');
    expect(trExists).not.toBeNull();

    const thExists = await page.$('table tr th');
    expect(thExists).not.toBeNull();



  });
});
