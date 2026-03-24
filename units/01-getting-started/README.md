# Unit 01: Getting Started

## Goal

Run the first Playwright test against the local training app.

## Clean-Slate Setup

If students are starting from a fresh machine, complete these steps first:

1. Install Node.js 20 or later.
2. Verify installation:

```bash
node -v
npm -v
```

3. Clone the repo and move into it:

```bash
git clone <your-repo-url>
cd playwright-tutorial
```

4. Install dependencies:

```bash
npm install
```

5. Install Playwright browsers:

```bash
npx playwright install
```

6. Start the local app:

```bash
npm run app
```

7. In another terminal, run this unit:

```bash
npm run test:unit:01
```

## What To Teach

- how to start the app
- how Playwright gets installed in a project
- how to run a Playwright test
- what `test()` means
- what `expect()` means
- how to read a simple passing test

## Extra Instructor Note

If you want to show how Playwright is installed in a brand new project outside this repo, demonstrate:

```bash
npm init -y
npm install -D @playwright/test
npx playwright install
```

## Files In This Unit

- `example.spec.js`
- `exercise.spec.js`

## Instructor Flow

1. Run the example test.
2. Explain navigation and one assertion.
3. Ask students to open the exercise file and complete it.

## After Note

Run this unit in headed mode:

```bash
npx playwright test units/01-getting-started --headed
```

Run this unit in debug mode:

```bash
npx playwright test units/01-getting-started --debug
```

Run a single file in debug mode:

```bash
npx playwright test units/01-getting-started/example.spec.js --debug
```
