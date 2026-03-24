const { test, expect } = require('@playwright/test');

test.skip('student exercise: assert placeholder text and button visibility', async ({ page }) => {
  await page.goto('/login.html');

  // Validate the username placeholder.
  // Validate the password placeholder.
  // Validate the Login button is visible.

  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
