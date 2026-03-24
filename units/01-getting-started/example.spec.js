const { test, expect } = require('@playwright/test');

test('home page shows training app title and practice links', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Playwright Training App');
  await expect(page.getByRole('heading', { name: 'Playwright Training App' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Login Page' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Widgets Page' })).toBeVisible();
});
