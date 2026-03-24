# Config, Test Data, Logging, and Reporting

## Section Goal

Understand how supporting pieces such as config, test data, logging, and reporting make an automation framework practical and maintainable.

## Why This Section Matters

Students often focus only on test steps and assertions, but real automation work also requires good execution visibility, controlled test data, and clean environment handling.

## Topics To Cover

- test data management
- static vs dynamic data
- centralizing reusable values
- environment-specific configuration
- storing base URLs and reusable settings
- why credentials and secrets should be handled carefully
- logging basics
- reporting basics
- screenshots, traces, and debugging artifacts

## Config

Configuration helps avoid hard-coded values across tests.

Examples:

- base URL
- environment name
- timeout settings
- browser settings

Students should understand that config belongs in one controlled place, not scattered across multiple files.

## Test Data

Test data should be:

- easy to find
- easy to update
- separated from test logic where reasonable
- suitable for positive and negative scenarios

Examples:

- valid login data
- invalid login data
- search values
- expected messages

## Logging

Logging helps answer:

- what step was running when the test failed
- which data was used
- what part of the workflow broke

Students should learn to log useful information, not excessive noise.

## Reporting

Students should learn:

- how to read the Playwright HTML report
- how to inspect failed tests
- how screenshots help debugging
- how traces help understand execution flow
- when video recording may be useful

## Student Practice Tasks

1. Move hard-coded test values into a test-data file.
2. Identify which values belong in config and which belong in test data.
3. Add basic logging to a sample flow.
4. Run a test, inspect the report, and explain what information is available when a test fails.

## Expected Outcome

Students should understand how to support automation execution with clean configuration, useful logs, and practical reports.
