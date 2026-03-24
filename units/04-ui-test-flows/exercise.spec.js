const { test, expect } = require('@playwright/test');

test.skip('student exercise: search for a missing product and validate no results', async ({ page }) => {
  await page.goto('/catalog.html');

  // Search for a product name that does not exist.
  // Validate that no product items are shown.

  await expect(page.locator('#product-list li')).toHaveCount(0);
});
