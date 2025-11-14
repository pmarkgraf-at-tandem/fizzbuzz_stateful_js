# FizzBuzz TDD Exercise (Jasmine)

This project is a JavaScript implementation of FizzBuzz for practicing Test-Driven Development (TDD) using Jasmine.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run tests:

   ```bash
   npx jasmine tests/fizzbuzz.spec.js
   ```

3. Auto-watch tests:

   ```bash
   ./watch-test.sh
   ```

## TDD Workflow

- Write a failing test in `tests/fizzbuzz.spec.js`
- Implement code in `src/fizzbuzz.js` to make the test pass
- Refactor and repeat

## Weird setup issue

Node version defaults to a very old version on Phil’s machine. To fix this, enter:

   ```bash
   nvm use 22.11.0
   ```

## end
