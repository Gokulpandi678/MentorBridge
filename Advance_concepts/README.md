# JavaScript ES6 Modules, Timers, Callbacks, and API Example

## Files

### `file1.js`

- **Imports** a function from `file2.js`
- **Timer Function**: Counts from 10 seconds and prints "Timed out!" after completion
- **Module Usage**: Calls `testModule()` from the imported module
- **Callback Function**: Demonstrates use of a callback by performing addition and then multiplication
- **API Call**: Fetches data from the REST Countries API for the country "Eesti" and logs its name, capital, and region

### `file2.js`

- **Exports** `testModule` function that logs a message to the console

## Technologies Used

- JavaScript ES Modules (`import/export`)
- `setInterval` and `setTimeout` for timing
- `Callback` functions
- `fetch` API and `async/await` for asynchronous data fetching
