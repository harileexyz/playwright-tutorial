const { test, expect } = require('@playwright/test');
const { users } = require('./test-data/users');

test.skip('student exercise: use invalid user test data from a separate file', async ({ page }) => {
  await page.goto('/login.html');

  // Use users.invalidUser instead of hard-coded values.
  // Submit the form and validate the error message.

  await expect(page.locator('#login-message')).toHaveText('Invalid username or password');
});
