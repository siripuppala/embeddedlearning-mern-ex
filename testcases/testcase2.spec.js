const { test, expect } = require('@playwright/test');

test.describe('Navbar and Layout Verification', () => {
  test('Verify navbar, container-fluid, row, footer elements, and anchor link navigation', async ({ page }) => {
    // Navigate to the website
    await page.goto('http://127.0.0.1:5500/index.html');

    // Check if navbar with specific class exists
    const navbar = await page.$('nav.navbar.navbar-dark.navbar-expand-sm.fixed-top');
    expect(navbar).not.toBeNull();

    // Check if div with class container-fluid exists
    const containerFluid = await page.$('div.container-fluid');
    expect(containerFluid).not.toBeNull();

    // Check if div with class row exists
    const row = await page.$('div.row');
    expect(row).not.toBeNull();

    // Check if footer tag exists
    const footer = await page.$('footer');
    expect(footer).not.toBeNull();




    // Check if clicking on anchor with href="#acads" scrolls to div with id="acads"
    const anchor = await page.$('a[href="#acads"]');
    expect(anchor).not.toBeNull();

    // Scroll to the anchor
    await anchor.click();

    // Verify that the div with id="acads" is now in the viewport
    const acadsDiv = await page.$('div#acads');
    expect(acadsDiv).not.toBeNull();

    const isVisible = await acadsDiv.isVisible();
    expect(isVisible).toBe(true);

    //////////////////////////////////////
    // Check if clicking on anchor with href="#techskills" scrolls to div with id="techskills"
    const anchortechskills = await page.$('a[href="#techskills"]');
    expect(anchortechskills).not.toBeNull();

    // Scroll to the anchor
    await anchortechskills.click();

    // Verify that the div with id="techskills" is now in the viewport
    const techskillsDiv = await page.$('div#techskills');
    expect(techskillsDiv).not.toBeNull();

    const techskillsIsVisible = await techskillsDiv.isVisible();
    expect(techskillsIsVisible).toBe(true);

 //////////////////////////////////////////
  // Check if clicking on anchor with href="#projects" scrolls to div with id="projects"
  const projectsanchor = await page.$('a[href="#projects"]');
  expect(projectsanchor).not.toBeNull();

  // Scroll to the anchor
  await projectsanchor.click();

  // Verify that the div with id="projects" is now in the viewport
  const projectsDiv = await page.$('div#projects');
  expect(projectsDiv).not.toBeNull();

  const projectsIsVisible = await acadsDiv.isVisible();
  expect(projectsIsVisible).toBe(true);

  ////////////////////////////////////////////////////////
   // Check if clicking on anchor with href="#contact" scrolls to div with id="contact"
   const contactanchor = await page.$('a[href="#contact"]');
   expect(contactanchor).not.toBeNull();

   // Scroll to the anchor
   await contactanchor.click();

   // Verify that the div with id="acads" is now in the viewport
   const contactDiv = await page.$('div#contact');
   expect(contactDiv).not.toBeNull();

   const contactIsVisible = await acadsDiv.isVisible();
   expect(contactIsVisible).toBe(true);


  });
});
