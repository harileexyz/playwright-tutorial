# Playwright Practical Training Repo

This repository is designed for practical teaching from day 1. Students should be able to clone it, run the local demo app, execute Playwright tests, and practice one small unit at a time.

## Repo Structure

```text
app/                      local demo app for UI and API practice
docs/                     theory and topic reference
units/                    practical lesson units
  01-getting-started/
  02-locators-and-actions/
  03-assertions/
  04-ui-test-flows/
  05-framework-basics/
  06-api-testing/
  07-config-data-logging-reporting/
  08-playwright-framework/
```

## Teaching Approach

Each unit should be taught in this order:

1. Explain one small concept
2. Show one working example
3. Let students run the example
4. Give them one exercise in the same unit
5. Move to the next unit only after they replicate it

## Setup

These steps assume the student is starting from a clean machine.

1. Install Node.js first.

Use Node.js 20 or later. After installation, verify:

```bash
node -v
npm -v
```

2. Clone the repository and move into it.

```bash
git clone <your-repo-url>
cd playwright-tutorial
```

3. Install project dependencies:

```bash
npm install
```

4. Install Playwright browsers:

```bash
npx playwright install
```

If you want to explain how Playwright is installed in a brand new project, this repo already includes `@playwright/test` in `package.json`, but the equivalent install command is:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

5. Run the local training app:

```bash
npm run app
```

6. In another terminal, run all example tests:

```bash
npm run test:examples
```

## Useful Scripts

- `npm run app`
- `npm run test`
- `npm run test:headed`
- `npm run test:examples`
- `npm run test:unit:01`
- `npm run test:unit:02`
- `npm run test:unit:03`
- `npm run test:unit:04`
- `npm run test:unit:05`
- `npm run test:unit:06`
- `npm run test:unit:07`
- `npm run test:unit:08`
- `npm run report`

## Ways To Run Tests

Run all tests:

```bash
npx playwright test
```

Run tests using the repo scripts:

```bash
npm run test
npm run test:unit:03
```

Run tests by folder:

```bash
npx playwright test units/03-assertions
```

Run tests by file name pattern:

```bash
npx playwright test assertions
```

Run a test by title:

```bash
npx playwright test -g "valid login shows success message and dashboard"
```

Run a test by file and line number:

```bash
npx playwright test units/03-assertions/example.spec.js:3
```

## How Students Should Use This Repo

- read the unit `README.md`
- run the example test first
- understand the code before changing anything
- open the matching exercise file
- remove `test.skip` when they are ready
- complete the exercise on their own

## Local Training App Routes

- `/`
- `/login.html`
- `/widgets.html`
- `/catalog.html`

## Notes

- The `docs/` folder is reference material
- The `units/` folder is the practical learning path
- The local app is intentionally simple so students can focus on Playwright concepts, not app complexity
- The training app runs on `http://127.0.0.1:3111`
- Students starting from scratch should complete the full setup steps before opening Unit 01

## After Note

Run tests in headed mode:

```bash
npm run test:headed
```

Run a specific unit in headed mode:

```bash
npx playwright test units/01-getting-started --headed
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Run a specific file in debug mode:

```bash
npx playwright test units/01-getting-started/example.spec.js --debug
```
