const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './units',
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:3111',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  webServer: {
    command: 'npm run app',
    url: 'http://127.0.0.1:3111',
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
