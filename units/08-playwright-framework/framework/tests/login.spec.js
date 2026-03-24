const { test, expect } = require('../fixtures/testFixtures');
const { users } = require('../test-data/users');
const { logStep } = require('../utils/logger');

test.describe('Login framework tests', () => {
  test('valid login using page object and fixture', async ({ loginPage }) => {
    logStep('Open login page');
    await loginPage.open();
    // Demo-only wait so students can observe page load in headed mode.
    await loginPage.page.waitForTimeout(1000);

    logStep('Login with valid user');
    await loginPage.login(users.valid.username, users.valid.password);
    // Demo-only wait so students can see the submitted state before assertions.
    await loginPage.page.waitForTimeout(1000);

    logStep('Validate success state');
    await expect(loginPage.message).toHaveText('Login successful');
    await expect(loginPage.dashboardHeading).toBeVisible();
    // Demo-only wait so the success state remains visible briefly.
    await loginPage.page.waitForTimeout(1200);
  });

  test('invalid login using page object and shared data', async ({ loginPage }) => {
    await loginPage.open();
    // Demo-only wait so students can observe navigation.
    await loginPage.page.waitForTimeout(1000);
    await loginPage.login(users.invalid.username, users.invalid.password);
    // Demo-only wait so students can see the error state before validation.
    await loginPage.page.waitForTimeout(1000);

    await expect(loginPage.message).toHaveText('Invalid username or password');
    await expect(loginPage.dashboardHeading).toBeHidden();
    // Demo-only wait so the error state remains visible briefly.
    await loginPage.page.waitForTimeout(1200);
  });
});
