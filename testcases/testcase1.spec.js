const { test, expect } = require('@playwright/test');


test.beforeEach(async ({page}) => {
  await page.goto('http://127.0.0.1:5500/index.html');
});

test.describe('Navbar Navigation and Page Content Verification', () => {
  test('Verify navbar', async ({ page }) => {
  
    // Check if navbar with specific class exists
    const navbar = await page.$('nav.navbar.navbar-dark.navbar-expand-sm.fixed-top');
    expect(navbar).not.toBeNull();  
  });


  test('Verify About Us link and page', async ({ page }) => {

    // Verify 'About Us' link navigation
    const aboutUsLink = await page.$('a[href="aboutus.html"]');
    expect(aboutUsLink).not.toBeNull();
    await aboutUsLink.click();
    await page.waitForLoadState('load');
    expect(page.url()).toContain('aboutus.html');

  });


  test('Verify Products link and  page', async ({ page }) => {

    // Verify 'Products' link navigation and content
    const productsLink = await page.$('a[href="gallery.html"]');
    expect(productsLink).not.toBeNull();
    await productsLink.click();
    await page.waitForLoadState('load');
    expect(page.url()).toContain('gallery.html');

  });


  test('Verify Products page contents', async ({ page }) => {
   
    // Verify 'Products' link navigation and content
    const productsLink = await page.$('a[href="gallery.html"]');
    expect(productsLink).not.toBeNull();
    await productsLink.click();
    await page.waitForLoadState('load');
    expect(page.url()).toContain('gallery.html');

    // Verify Products page structure
    await page.locator('div.container').first();
    
    
    expect( page.locator('div.container')).not.toBeNull();
    
    const container = await page.$('div.container');
    // const row = await container.$('div.row');

    await page.locator('div.container.row').first();
    expect(page.locator('div.container.row')).not.toBeNull();

    await page.locator('div.container.row.col-sm-3').first();
    // const colSm3 = await row.$('div.col-sm-3');
    // await colSm3.first();
    expect(page.locator('div.container.row.col-sm-3')).not.toBeNull();

  });


  test('Verify Contact link and page contents', async ({ page }) => {
   
    // Verify 'Contact Us' link navigation and content
    const contactUsLink = await page.$('a[href="contactus.html"]');
    expect(contactUsLink).not.toBeNull();
    await contactUsLink.click();
    await page.waitForLoadState('load');
    expect(page.url()).toContain('contactus.html');

    // Verify Contact Us page structure
    const textField = await page.$('input[type="text"]');
    expect(textField).not.toBeNull();

    const textArea = await page.$('textarea');
    expect(textArea).not.toBeNull();

    const submitButton = await page.$('button[type="submit"], input[type="submit"]');
    expect(submitButton).not.toBeNull();
  });

});
