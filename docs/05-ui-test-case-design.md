# UI Test Case Design

## Section Goal

Learn how to convert manual test cases into maintainable automated UI tests.

## Why This Section Matters

Writing code is only one part of automation. Students also need to know how to read a business scenario, identify the core validation points, and design a clean automated test.

## Topics To Cover

- how to read a manual test case
- how to identify preconditions
- how to identify test steps
- how to identify expected results
- what should be automated first
- happy path vs negative path
- naming test cases clearly
- keeping tests focused
- avoiding duplication between tests

## Test Design Guidance

When converting a manual test case into automation:

1. identify the starting state
2. identify the important actions
3. identify the expected outcome
4. remove unnecessary details that do not need validation
5. choose assertions that prove the business result

## Suggested Practice Scenarios

- valid login
- invalid login
- search with matching result
- search with no result
- form submission with valid data
- form submission with missing required fields
- logout flow

## What To Emphasize

- one test should have one clear purpose
- repeated setup should be moved into reusable methods later
- not every field needs separate validation in the same test
- test names should tell the reader what is being verified

## Student Practice Tasks

1. Take a written manual login test case and convert it into an automated test plan.
2. Create one happy path UI test and one negative path UI test.
3. Rewrite vague test names into clearer names.
4. Identify duplicated steps across two test cases.

## Expected Outcome

Students should be able to read a scenario and design a small, clear, and testable UI automation flow.
