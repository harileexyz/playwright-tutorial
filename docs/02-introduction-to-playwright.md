# Introduction to Playwright

## Section Goal

Understand what Playwright is, what it can do, how a Playwright project is structured, and how to run a basic test.

## Why This Section Matters

Playwright is the main tool used in this course. Students need to understand the basic building blocks of a Playwright project before they start writing their own tests.

## Topics To Cover

- what is Playwright
- why Playwright is used for UI automation
- why Playwright is also useful for API automation
- how to install Playwright in a new project
- major Playwright features
- browser support
- project initialization
- generated folder structure
- Playwright Test runner basics
- `test()` and `expect()`
- headed mode vs headless mode
- running a single test
- running all tests
- basic report generation
- using code generation carefully

## Key Concepts

### What Playwright Provides

Playwright gives you:

- browser automation
- a built-in test runner
- assertions
- fixtures
- API testing support
- traces, screenshots, and reports

This makes it suitable for both learning and building real automation projects.

### Installing Playwright In A New Project

For students starting from scratch, the installation flow should be taught explicitly:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

What each step does:

- `npm init -y` creates a Node project
- `npm install -D @playwright/test` installs the Playwright test package
- `npx playwright install` downloads the browser binaries used by Playwright

For this repository specifically, students usually only need:

```bash
npm install
npx playwright install
```

because the Playwright package is already included in `package.json`.

### Basic Test Structure

A Playwright test usually contains:

- a test definition
- actions on the application
- validations using assertions

Typical structure:

```ts
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

### Test Runner

The test runner is responsible for:

- discovering tests
- executing them
- showing pass and fail results
- generating reports

Students should understand that Playwright is not just a browser tool. It also provides the execution and reporting layer.

### Headed vs Headless

- headed mode shows the browser while the test runs
- headless mode runs without opening a visible browser window

Headed mode is useful during learning and debugging. Headless mode is common in CI and repeated execution.

## Suggested Demo Flow

1. Show how Playwright is installed in a new project.
2. Explain the generated files and folders.
3. Run the sample tests.
4. Open the HTML report.
5. Show one simple test and explain it line by line.

## Student Practice Tasks

1. Run the sample Playwright tests.
2. Identify which part of the test performs action and which part performs validation.
3. Create one simple test that opens a page and validates the title or a visible element.
4. Run the test in headed mode and then in headless mode.

## Expected Outcome

Students should be able to identify the main parts of a Playwright test and execute simple tests successfully.
