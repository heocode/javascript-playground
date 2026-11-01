let depth = 0;

function test() {
    depth++;
    test();
}

try {
    test();
} catch (error) {
    console.log("Maximum depth:", depth);
}

/*
 * Experiment 01 — Call Stack Limits
 *
 * Results:
 * - Safari: 40,415 calls
1
 * - Node.js: 9,183 calls
 *
 * Observations:
 * 1. Maximum recursion depth differs across environments.
 * 2. Chrome and Node.js use V8 but have different limits.
 * 3. Recursion depth does not directly indicate stack size.
 *
 * Conclusion:
 * JavaScript does not define a fixed call stack limit.
 * The actual limit depends on the runtime and its configuration.
 */
