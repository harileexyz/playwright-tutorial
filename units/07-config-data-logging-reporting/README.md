# Unit 07: Config, Data, Logging, and Reporting

## Goal

Show students how to support tests with reusable data, basic configuration, and simple logging.

## What To Teach

- why hard-coded values become a problem
- where to keep reusable test data
- where simple config should live
- how logging helps debugging
- how to open Playwright HTML reports

## Files In This Unit

- `config/env.js`
- `test-data/users.js`
- `utils/logger.js`
- `example.spec.js`
- `exercise.spec.js`

## After Note

Run this unit in headed mode:

```bash
npx playwright test units/07-config-data-logging-reporting --headed
```

Run this unit in debug mode:

```bash
npx playwright test units/07-config-data-logging-reporting --debug
```

Run a single file in debug mode:

```bash
npx playwright test units/07-config-data-logging-reporting/example.spec.js --debug
```
