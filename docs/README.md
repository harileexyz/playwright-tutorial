# Playwright Course Docs

## Overview

This documentation is the reference track for the repository. The practical track lives in the `units/` folder, where each lesson has runnable example tests and student exercises.

Students should use these docs together with the practical units.

## Learning Path

1. [Foundations of Testing](./01-foundations-of-testing.md)
2. [Introduction to Playwright](./02-introduction-to-playwright.md)
3. [Locators and UI Interactions](./03-locators-and-ui-interactions.md)
4. [Assertions and Validation](./04-assertions-and-validation.md)
5. [UI Test Case Design](./05-ui-test-case-design.md)
6. [Minimal Framework Design](./06-minimal-framework-design.md)
7. [API Automation with Playwright](./07-api-automation-with-playwright.md)
8. [Config, Test Data, Logging, and Reporting](./08-config-test-data-logging-reporting.md)
9. [Best Practices and Common Mistakes](./09-best-practices-and-common-mistakes.md)

## Practical Companion

Match the docs with the practical units in the root `units/` folder:

- `01-getting-started`
- `02-locators-and-actions`
- `03-assertions`
- `04-ui-test-flows`
- `05-framework-basics`
- `06-api-testing`
- `07-config-data-logging-reporting`
- `08-playwright-framework`

## What You Should Learn

By the end of this material, you should be able to:

- explain the purpose of automation testing
- understand what a test automation framework is
- write basic UI tests using Playwright
- identify and use reliable locators
- write meaningful assertions
- build a minimal automation framework structure
- create basic API automation tests
- understand configuration, logging, and reporting concepts
- avoid common beginner mistakes in automation

## How To Use These Docs

- Read one section at a time
- Practice the examples discussed in class
- Replicate the framework structure as it is introduced
- Keep notes of locator choices, assertion choices, and framework design decisions
- Revisit earlier sections when writing real test cases

## After Note

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Run a specific file in debug mode:

```bash
npx playwright test units/01-getting-started/example.spec.js --debug
```
