# Unit 08: Playwright Framework With Page Object Model

## Goal

Teach students how to create a proper Playwright automation framework that is organized, reusable, and scalable.

## What To Teach

- how to structure a Playwright framework
- why a framework is needed beyond direct test files
- how to implement Page Object Model
- how to separate tests, pages, data, fixtures, and utilities
- how to create reusable test fixtures
- how to keep tests readable and maintainable

## Suggested Teaching Flow

1. Show a direct test from an earlier unit.
2. Explain why repeated locators and actions become hard to maintain.
3. Introduce the framework folder structure.
4. Move page actions into page objects.
5. Move shared data into test-data files.
6. Create a custom fixture to inject page objects into tests.
7. Run framework-based tests and compare readability with earlier tests.

## Suggested Framework Structure

```text
units/08-playwright-framework/
  framework/
    fixtures/
    pages/
    test-data/
    tests/
    utils/
```

## Files In This Unit

- `framework/fixtures/testFixtures.js`
- `framework/pages/LoginPage.js`
- `framework/pages/CatalogPage.js`
- `framework/test-data/users.js`
- `framework/utils/logger.js`
- `framework/tests/login.spec.js`
- `framework/tests/catalog.spec.js`
- `exercise.spec.js`

## Demo Note

The example framework tests in this unit include short `waitForTimeout()` calls so actions are easier to see during classroom demonstrations in headed mode.

Use this to teach what is happening on screen, but also explain that hard waits are not a best practice for real automation frameworks unless there is a specific reason.

## After Note

Run this unit in headed mode:

```bash
npx playwright test units/08-playwright-framework --headed
```

Run this unit in debug mode:

```bash
npx playwright test units/08-playwright-framework --debug
```

Run a single file in debug mode:

```bash
npx playwright test units/08-playwright-framework/framework/tests/login.spec.js --debug
```
