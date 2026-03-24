const { test, expect } = require('@playwright/test');

test('search for a product and add it to the cart', async ({ page }) => {
  await page.goto('/catalog.html');

  await page.getByLabel('Search').fill('Book');
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByText('Playwright Book')).toBeVisible();
  await page.getByTestId('add-to-cart-1').click();

  await expect(page.locator('#cart-count')).toHaveText('1');
});
