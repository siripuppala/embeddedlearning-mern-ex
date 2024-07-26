const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto('http://127.0.0.1:5500/index.html');
});

test.describe('Zipcode Entry and Weather Details Verification', () => {
  test('Enter zipcode and verify weather details and image', async ({ page }) => {
    
    // Enter a zipcode in the text field
    await page.fill('#cityname', 'manhattan'); // Example zipcode, replace with relevant data

    // Click the submit button
    await page.click('button'); // Adjust the selector based on actual attributes

    // Wait for the details to be displayed
    await page.waitForSelector('#mydiv');

    // Verify weather details
    // const details = await page.locator('#mydiv');
    // expect(details).toContain('Temperature');
    // expect(details).toContain('Min Temp');
    // expect(details).toContain('Max Temp');

  await page.locator('#mydiv',{hasText:' Temperature'});
    await page.locator('#mydiv',{hasText:'Min Temp'});
    await page.locator('#mydiv',{hasText:'Max Temp'});


    // Verify that the image source ends with .png
    const imageSrc = await page.getAttribute('img', 'src');
    expect(imageSrc).toMatch(/\.png$/); // Regex to check if src ends with .png
  });

  
});
