# Locators and UI Interactions

## Section Goal

Learn how to identify elements reliably and perform basic user interactions in Playwright.

## Why This Section Matters

Most beginner automation failures come from poor locator choices and unstable interaction patterns. This section is one of the most important parts of the course.

## Topics To Cover

- what is a locator
- why locator quality matters
- stable locators vs unstable locators
- Playwright locator strategies:
  - `getByRole()`
  - `getByText()`
  - `getByLabel()`
  - `getByPlaceholder()`
  - `getByTestId()`
  - `locator()`
- when to use CSS or XPath
- strict mode behavior
- chained locators
- filtered locators
- locating dynamic elements

## Basic UI Interactions

- `click()`
- `fill()`
- `press()`
- `hover()`
- `check()` and `uncheck()`
- `selectOption()`
- `dblclick()`
- file upload basics

## Synchronization Concepts

- Playwright auto-waiting
- why `waitForTimeout()` should not be the default solution
- waiting for visibility
- waiting for enabled state
- handling delayed loading elements

## Locator Guidance

Preferred locator order for most cases:

1. accessible and semantic locators such as `getByRole()`
2. user-facing locators such as label or placeholder
3. test ids when provided by the application
4. CSS or XPath only when necessary

Students should learn that a short locator is not always a good locator. The best locator is usually the one that is stable, readable, and closely tied to user behavior.

## Example Discussion Points

- Why is `getByRole('button', { name: 'Login' })` often better than a long CSS path?
- Why do dynamic class names make some locators fragile?
- Why should automation engineers understand the DOM instead of only copying selectors from devtools?

## Student Practice Tasks

1. Find three different ways to locate the same element.
2. Identify which locator is most reliable and explain why.
3. Automate a simple login form using proper locators.
4. Automate checkbox, dropdown, and button interactions on a practice page.
5. Replace a hard wait with a better synchronization approach.

## Expected Outcome

Students should be able to choose reliable locators and automate common user actions without depending on unnecessary waits.
