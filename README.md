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

## Installing watchexec

The `watch-test.sh` script requires `watchexec` to be installed on WSL2. If you get a "command not found" error, install it with:

```bash
cd /tmp
wget https://github.com/watchexec/watchexec/releases/download/v1.25.1/watchexec-1.25.1-x86_64-unknown-linux-gnu.tar.xz
tar -xf watchexec-1.25.1-x86_64-unknown-linux-gnu.tar.xz
sudo cp watchexec-1.25.1-x86_64-unknown-linux-gnu/watchexec /usr/local/bin/
rm -rf watchexec-1.25.1-*
```

Verify installation:

```bash
watchexec --version
```

## end
