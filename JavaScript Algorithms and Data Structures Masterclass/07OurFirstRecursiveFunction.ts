import { runTests, TestCase } from "../utils/testRunner";

/*
Recursion - countDown

Write a recursive function called countDown.

The function accepts a number and returns an array containing:
- all numbers from num down to 1
- then "All done!" at the end

Examples:
countDown(5) // [5, 4, 3, 2, 1, "All done!"]
countDown(3) // [3, 2, 1, "All done!"]
countDown(1) // [1, "All done!"]
countDown(0) // ["All done!"]

Learning goal:
- Practice base case
- Practice recursive call
- Avoid infinite recursion
*/


function countDown(num: number): Array<number | string> {
    // Write your recursive code here
    return [];
}

const testCases: TestCase<[number], Array<number | string>>[] = [
    { input: [5], expected: [5, 4, 3, 2, 1, "All done!"] },
    { input: [3], expected: [3, 2, 1, "All done!"] },
    { input: [1], expected: [1, "All done!"] },
    { input: [0], expected: ["All done!"] },
    { input: [-1], expected: ["All done!"] },
    { input: [10], expected: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, "All done!"] },
];

runTests(countDown, testCases);