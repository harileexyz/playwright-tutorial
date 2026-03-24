# Unit 06: API Testing

## Goal

Use Playwright request APIs to test local endpoints directly.

## What To Teach

- GET requests
- POST requests
- authenticated requests with bearer tokens
- path parameters and query parameters
- status code validation
- response body validation
- iterating through JSON arrays and nested objects
- validating computed values from API responses
- why API tests are useful

## Files In This Unit

- `example.spec.js`
- `exercise.spec.js`

## After Note

Run this unit in headed mode:

```bash
npx playwright test units/06-api-testing --headed
```

Run this unit in debug mode:

```bash
npx playwright test units/06-api-testing --debug
```

Run a single file in debug mode:

```bash
npx playwright test units/06-api-testing/example.spec.js --debug
```
