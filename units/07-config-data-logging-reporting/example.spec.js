const { test, expect } = require('@playwright/test');
const { env } = require('./config/env');
const { logStep } = require('./utils/logger');

test('use config data and log each test step', async ({ page }) => {
  logStep('Open the login page');
  await page.goto('/login.html');

  logStep('Fill valid user credentials');
  await page.getByLabel('Username').fill(env.validUser.username);
  await page.getByLabel('Password').fill(env.validUser.password);

  logStep('Submit the login form');
  await page.getByRole('button', { name: 'Login' }).click();

  logStep('Validate the success message');
  await expect(page.locator('#login-message')).toHaveText('Login successful');
});
