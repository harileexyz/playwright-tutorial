# Foundations of Testing

## Section Goal

Understand what software testing is, why it matters, where automation fits, and why teams use testing frameworks.

## Why This Section Matters

Students often start by learning tool syntax first. That creates shallow understanding. Before using Playwright, you need to understand what problem automation is solving and what a test engineer is expected to do in a real project.

## Topics To Cover

- what is software testing
- why testing is important in software projects
- manual testing vs automation testing
- advantages of automation testing
- limitations of automation testing
- when UI automation is useful
- when API automation is useful
- where automation should not be used immediately
- types of testing:
  - smoke testing
  - sanity testing
  - regression testing
  - functional testing
  - end-to-end testing
- test case vs test scenario
- bug, defect, issue, failure
- defect life cycle basics
- SDLC basics
- STLC basics
- what a test automation framework is
- why teams use frameworks instead of isolated scripts

## Key Concepts

### Software Testing

Software testing is the activity of checking whether an application behaves as expected. The purpose is not just to find bugs, but also to reduce risk and improve confidence in releases.

### Manual Testing

Manual testing is performed by a person without writing automation scripts. It is useful for exploratory testing, early validation, usability checks, and cases where frequent automation does not make sense.

### Automation Testing

Automation testing uses tools and scripts to perform repeatable checks. It is useful when:

- the same test needs to be run many times
- regression coverage is important
- fast feedback is needed
- stable business flows need repeated validation

Automation is not a replacement for all testing. It is one part of an overall quality strategy.

### UI Automation vs API Automation

UI automation validates application behavior through the user interface. It is closer to real user behavior, but it is usually slower and more fragile than API testing.

API automation validates requests and responses at the service level. It is often faster, easier to maintain, and useful for validating business logic without depending on the UI.

### Test Automation Framework

A framework is a structured way to organize automation code, data, configuration, utilities, logging, and reporting.

Without a framework, tests become hard to maintain because:

- code gets duplicated
- test data is mixed with test logic
- reports are hard to understand
- debugging becomes slower
- new tests become inconsistent

## What Students Should Understand After This Section

- testing is broader than tool usage
- automation should be applied thoughtfully
- UI and API automation serve different purposes
- frameworks exist to improve maintainability and consistency

## Discussion Prompts

- Which test cases should be automated first in a project?
- Why is every manual test case not a good automation candidate?
- Why do teams invest in frameworks instead of writing single-file scripts?

## Practice Tasks

1. Write five examples of test cases that are good candidates for automation.
2. Write three examples of test cases that should stay manual at first.
3. Explain the difference between smoke, sanity, and regression testing in your own words.
4. Give one example where UI automation is useful and one where API automation is more useful.

## Expected Outcome

Students should be able to explain the role of automation in software testing and understand why framework-based automation is necessary.
