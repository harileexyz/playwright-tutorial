# Minimal Framework Design

## Section Goal

Understand how to organize Playwright automation into a small framework that is readable, reusable, and easy to extend.

## Why This Section Matters

Students can write simple tests quickly, but real automation projects become difficult to maintain if everything is placed in one file. This section introduces structure without adding unnecessary complexity too early.

## Topics To Cover

- why a framework is needed
- problems with script-only automation
- separating test logic from page interaction logic
- reusable helper methods
- organizing test data
- using configuration cleanly
- keeping the framework minimal

## Suggested Project Structure

```text
project-root/
  tests/
  pages/
  utils/
  test-data/
  config/
  reports/
```

## Key Concepts

### Tests Folder

Contains actual test cases. Tests should describe the scenario and expected behavior.

### Pages Folder

Contains page objects or reusable page-level methods. These files should centralize UI interaction details so tests stay readable.

### Utils Folder

Contains reusable helper code such as logger utilities, common helpers, or shared functions.

### Test Data Folder

Contains test data used by the automation suite. This helps avoid hard-coding values inside tests.

### Config Folder

Contains configuration values such as environment details, URLs, and reusable settings.

## Page Object Model Basics

The Page Object Model is a design approach where page elements and page actions are grouped into reusable classes or modules.

Benefits:

- reduced duplication
- easier maintenance
- cleaner tests
- clearer ownership of page interactions

## Teaching Sequence For This Section

1. Write one raw UI test directly in a test file.
2. Show where duplication or poor structure appears.
3. Move locator and interaction logic into a page object.
4. Keep assertions in tests unless a reusable business check clearly belongs elsewhere.
5. Gradually introduce config, test data, and utility helpers.

## Student Practice Tasks

1. Identify which parts of a raw test should stay in the test file and which parts should move to a page object.
2. Create a simple page object for a login page.
3. Refactor one direct test into a page-object-based test.
4. Create a basic folder structure for a minimal framework.

## Expected Outcome

Students should understand how to move from direct scripts to a clean, minimal automation framework.
