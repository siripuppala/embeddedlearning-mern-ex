const { test, expect, devices } = require('@playwright/test');

test('check hamburger icon visibility on iPhone 11', async ({ browser }) => {
    const iPhone11 = devices['iPhone 11'];
    const context = await browser.newContext({
        ...iPhone11
    });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');
    const hamburgerSelector = '.navbar-toggler-icon';  // Adjust selector as needed
    // Check for visibility of the hamburger menu icon
    expect(await page.isVisible(hamburgerSelector)).toBeTruthy();
});

// Additional device can be tested similarly
test('check hamburger icon visibility on iPad', async ({ browser }) => {
    const iPad = devices['iPad (landscape)'];
    const context = await browser.newContext({
        ...iPad
    });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');
    const hamburgerSelector = '.navbar-toggler-icon';  // Adjust selector as needed
    // Hamburger may or may not be visible based on the specific web design
    expect(await page.isVisible(hamburgerSelector)).toBeFalsy();
});
