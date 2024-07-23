import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.getByRole('img').click();
  await page.getByRole('cell', { name: 'Course Details' }).click();
  await page.getByRole('heading', { name: 'Projects' }).click();
  await page.getByText('Project Title 1 Technical').click();
  await page.getByText('Participated in street cause').click();
  await page.getByText('Participated in street cause').click({
    button: 'right'
  });
  await page1.getByRole('cell', { name: 'body {' }).click();
  await page1.getByRole('cell', { name: '.profile {' }).click();
  await page1.getByRole('cell', { name: '.profile-text{' }).click();
  await page1.getByRole('cell', { name: '#score {' }).click();
  await page1.getByRole('cell', { name: '#score td, #score th {' }).click();
  await page1.getByRole('cell', { name: 'margin: auto;' }).nth(1).click();
  await page1.getByText('<img class="profile" src="img').click();
  await page1.getByText('<div class="proj">').first().click();
  await page1.getByText('<ol>').click();
  await page1.getByRole('row', { name: '214 <ul>' }).locator('span').click();
  await page1.getByText('<script>').click();
});