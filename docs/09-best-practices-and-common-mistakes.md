# Best Practices and Common Mistakes

## Section Goal

Learn the habits that make automation tests stable and maintainable, and recognize the mistakes that commonly cause flaky or low-value tests.

## Why This Section Matters

Freshers can quickly learn syntax, but quality comes from judgment. This section helps students avoid patterns that make test suites hard to trust and hard to maintain.

## Best Practices

- prefer stable and meaningful locators
- write tests with one clear purpose
- use meaningful assertions
- keep tests independent where possible
- avoid unnecessary duplication
- move reusable UI logic into page objects or helpers
- keep test data manageable
- use configuration for shared environment values
- make test names descriptive
- keep the framework simple at the beginning

## Common Mistakes

- using hard-coded waits everywhere
- choosing weak or brittle locators
- mixing test data directly into many test files
- putting too much logic into one large test
- writing tests with no real validation
- depending on execution order between tests
- creating page objects that contain assertions for everything
- adding complexity before the basics are stable

## Flaky Test Awareness

Students should understand that flaky tests usually come from:

- unstable locators
- poor synchronization
- shared test state
- environment instability
- incorrect assumptions in the test logic

The goal is not just to fix flaky tests after they appear, but to write tests in a way that reduces flakiness from the start.

## Student Practice Tasks

1. Review a weak test and list at least three problems with it.
2. Replace two poor locators with stronger alternatives.
3. Rewrite a test that uses hard waits into one that depends on proper waiting behavior.
4. Identify one example of duplication that should be refactored.

## Expected Outcome

Students should leave this section with a better sense of automation quality and maintainability, not just syntax familiarity.
