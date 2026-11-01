function recursion() {
    const data = new Array(100_000).fill(42);
    recursion();
}

try {
    recursion();
} catch (error) {
    console.log(error);
}

/**
 * Experiment 02 — Stack vs Heap
 *
 * Observations:
 * 1. Each recursive call creates a new stack frame.
 * 2. Arrays are typically allocated in the heap, not inside stack frames.
 * 3. Stack and heap have different memory limits and failure modes.
 * 4. Heap memory is allocated dynamically during execution.
 * 5. Unreachable arrays may be garbage-collected before recursion ends.
 * 6. Runtime behavior depends on engine optimizations and memory settings.
 *
 * Results:
 * - Node.js: Observed V8 heap out-of-memory failure (~4 GB heap).
 * - Chrome: Recursion depth changed from 12,921 to 15,128.
 * - Safari: Recursion depth decreased by approximately 10,000.
 *
 * Conclusion:
 * Recursion consumes call stack space, while array creation allocates
 * heap memory. Either limit may be reached first, depending on the runtime.
 */
