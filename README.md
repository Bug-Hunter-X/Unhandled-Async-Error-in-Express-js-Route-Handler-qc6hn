# Unhandled Async Error in Express.js Route Handler

This repository demonstrates a common error in asynchronous Node.js applications using Express.js: unhandled errors within timeout callbacks.  The `bug.js` file showcases the problematic code. The `bugSolution.js` file demonstrates a robust solution using proper error handling. 

## Problem

The `bug.js` example uses `setTimeout` to simulate an asynchronous operation.  If the query parameter `num` is not a valid number, the `parseInt` function will return `NaN`, and the subsequent multiplication will result in an error. However, this error is not properly handled, potentially leading to crashes or unexpected behavior.

## Solution

The `bugSolution.js` file shows the improved error handling. The `try...catch` block correctly captures the error occurring in the asynchronous operation.  A custom error message is sent to the client, providing a more user-friendly experience. This prevents the server from crashing and ensures graceful error handling.