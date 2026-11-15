type WindowState = {
    counter: number;
    windowStart: number;
};
const windowMs = 60_000;
const limit = 5;

const users = new Map<string, WindowState>();

function allowRequests(
    userId: string,
    requestTime: number = Date.now(),
): boolean {
    const userState = users.get(userId);

    if (!userState) {
        users.set(userId, { counter: 1, windowStart: requestTime });
        return true;
    } else {
        if (requestTime - userState.windowStart >= windowMs) {
            userState.counter = 1;
            userState.windowStart = requestTime;
            return true;
        } else if (userState.counter >= limit) {
            return false;
        } else {
            userState.counter += 1;
            return true;
        }
    }
}

console.log(allowRequests("Alex", 100_000)); // true
console.log(allowRequests("Alex", 110_000)); // true
console.log(allowRequests("Alex", 120_000)); // true
console.log(allowRequests("Alex", 130_000)); // true
console.log(allowRequests("Alex", 140_000)); // true

console.log(allowRequests("Alex", 150_000)); // false
console.log(allowRequests("Alex", 159_999)); // false

console.log(allowRequests("Alex", 160_000)); // true
console.log(allowRequests("Alex", 161_000)); // true
