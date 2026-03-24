const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

test.skip('student exercise: add and use an invalidLogin helper method', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  // Add a new reusable method in LoginPage and use it here.

  await expect(loginPage.message).toHaveText('Invalid username or password');
});
