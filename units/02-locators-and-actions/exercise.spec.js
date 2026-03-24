const { test, expect } = require('@playwright/test');

test.skip('student exercise: submit validation message on widgets page', async ({ page }) => {
  await page.goto('/widgets.html');

  // Fill only one field and click Send feedback.
  // Then validate the error message.

  await expect(page.getByText('Please complete all feedback fields')).toBeVisible();
});
