# Assertions and Validation

## Section Goal

Learn how to validate application behavior correctly after performing UI actions or API requests.

## Why This Section Matters

A test without validation is not a meaningful test. Many beginners write actions only and forget to confirm the expected result. Assertions are what turn a script into a real automated test.

## Topics To Cover

- what an assertion is
- why assertions matter
- positive validation
- negative validation
- page-level validation
- element-level validation
- text validation
- state validation
- count validation
- URL validation
- soft assertions vs hard assertions

## Common Playwright Assertions

- `toBeVisible()`
- `toBeHidden()`
- `toHaveText()`
- `toContainText()`
- `toHaveValue()`
- `toBeEnabled()`
- `toBeDisabled()`
- `toBeChecked()`
- `toHaveURL()`
- `toHaveCount()`

## Key Concepts

### Good Assertions

Good assertions should:

- validate important business behavior
- be easy to understand
- fail with useful information
- not be unnecessarily weak

### Weak Assertions

Examples of weak validation:

- checking only that the page loaded
- checking a generic text that appears on many screens
- validating something unrelated to the business outcome

### Stronger Assertions

Examples of stronger validation:

- a success message after form submission
- the updated URL after login
- the item count after adding a product
- the exact error message for invalid input

## Student Practice Tasks

1. Write one positive and one negative assertion for a login flow.
2. Compare `toHaveText()` and `toContainText()` and explain when each should be used.
3. Add assertions to a basic form submission test.
4. Validate that an invalid action shows the correct error message.

## Expected Outcome

Students should be able to write meaningful assertions that confirm whether the application behaved as expected.
