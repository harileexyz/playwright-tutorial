const { test, expect } = require('@playwright/test');

test('valid login shows success message and dashboard', async ({ page }) => {
  await page.goto('/login.html');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#login-message')).toHaveText('Login successful');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('invalid login shows error message', async ({ page }) => {
  await page.goto('/login.html');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('#login-message')).toHaveText('Invalid username or password');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeHidden();
});
