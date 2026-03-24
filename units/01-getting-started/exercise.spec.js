const { test, expect } = require('@playwright/test');

test.skip('student exercise: open the catalog page from the home page', async ({ page }) => {
  await page.goto('/');

  // Step 1: click the Catalog Page link
  // Step 2: validate the page heading
  // Step 3: validate that the search button is visible

  await expect(page.getByRole('heading', { name: 'Catalog Practice' })).toBeVisible();
});
