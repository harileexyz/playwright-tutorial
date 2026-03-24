const { test, expect } = require('@playwright/test');

test('use getByRole and getByText locators', async ({ page }) => {
  await page.goto('/widgets.html');\\\\\\\

  await page.getByRole('checkbox', { name: 'Subscribe to newsletter' }).check();
  await expect(page.getByRole('checkbox', { name: 'Subscribe to newsletter' })).toBeChecked();

  await page.getByRole('button', { name: 'Send feedback' }).click();
  await expect(page.getByText('Please complete all feedback fields')).toBeVisible();
});

test('use getByLabel and getByPlaceholder locators', async ({ page }) => {
  await page.goto('/widgets.html');

  await page.getByLabel('Select role').selectOption('tester');
  await expect(page.getByLabel('Select role')).toHaveValue('tester');

  await page.getByPlaceholder('name@example.com').fill('student@example.com');
  await page.getByPlaceholder('Share your feedback').fill('This is my first Playwright practice');
  await page.getByRole('button', { name: 'Send feedback' }).click();

  await expect(page.getByText('Feedback submitted')).toBeVisible();
});

test('use CSS id locator with locator()', async ({ page }) => {
  await page.goto('/widgets.html');

  await page.locator('#feedback-email').fill('student@example.com');
  await page.locator('#feedback-message').fill('Learning CSS locators');
  await page.locator('#submit-feedback').click();

  await expect(page.locator('#feedback-status')).toHaveText('Feedback submitted');
});

test('use XPath locator with locator()', async ({ page }) => {
  await page.goto('/widgets.html');

  await page.locator('xpath=//input[@id="feedback-email"]').fill('student@example.com');
  await page.locator('xpath=//input[@id="feedback-message"]').fill('Learning XPath locators');
  await page.locator('xpath=//button[@id="submit-feedback"]').click();

  await expect(page.locator('xpath=//div[@id="feedback-status"]')).toHaveText('Feedback submitted');
});

test('use getByTestId locator', async ({ page }) => {
  await page.goto('/catalog.html');

  await page.getByLabel('Search').fill('Book');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByText('Playwright Book')).toBeVisible();

  await page.getByTestId('add-to-cart-1').click();
  await expect(page.locator('#cart-count')).toHaveText('1');
});
