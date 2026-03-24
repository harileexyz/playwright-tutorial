const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

test('use a page object for login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login('student', 'Password123');

  await expect(loginPage.message).toHaveText('Login successful');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
