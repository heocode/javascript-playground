// 1
console.log("A");

setTimeout(() => {
    // 6
    console.log("B");

    Promise.resolve().then(() => {
        // 8
        console.log("C");

        // 12
        setTimeout(() => {
            console.log("D");
        }, 0);
    });

    // 7
    console.log("E");
}, 0);

queueMicrotask(() => {
    // 3
    console.log("F");

    setTimeout(() => {
        // 10
        console.log("G");

        // 11
        queueMicrotask(() => {
            console.log("H");
        });
    }, 0);
});

Promise.resolve().then(() => {
    // 4
    console.log("I");

    // 5
    queueMicrotask(() => {
        console.log("J");
    });
});

// 9
setTimeout(() => {
    console.log("K");
}, 0);

// 2
console.log("L");

/**
 * Experiment 03 — Event Loop Execution Order
 *
 * Key Findings:
 * 1. Synchronous code executes first.
 * 2. Microtasks run after the current synchronous execution finishes.
 * 3. Microtasks are processed in FIFO order.
 * 4. The microtask queue is drained before the next task.
 * 5. Microtasks created inside other microtasks are queued,
 *    not executed immediately.
 * 6. Timers scheduled inside microtasks do not automatically
 *    take priority over previously scheduled timers.
 */
