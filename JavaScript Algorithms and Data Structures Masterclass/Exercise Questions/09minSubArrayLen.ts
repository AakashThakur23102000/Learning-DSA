import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Sliding Window - minSubArrayLen

Write a function called minSubArrayLen which accepts two parameters:
- an array of positive integers
- a positive integer target

Return the minimal length of a contiguous subarray of which the sum is
greater than or equal to the target.

If there isn't one, return 0 instead.

Examples:
minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> [4, 3]
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> [5, 4]
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> [62]
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0

Constraints:
Time Complexity - O(n)
Space Complexity - O(1)
*/

function minSubArrayLen(arr: number[], target: number): number {
    // Write your code here
    return 0;
}

const testCases: TestCase<[number[], number], number>[] = [
    { input: [[2, 3, 1, 2, 4, 3], 7], expected: 2 },
    { input: [[2, 1, 6, 5, 4], 9], expected: 2 },
    { input: [[3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52], expected: 1 },
    { input: [[1, 4, 16, 22, 5, 7, 8, 9, 10], 39], expected: 3 },
    { input: [[1, 4, 16, 22, 5, 7, 8, 9, 10], 55], expected: 5 },
    { input: [[4, 3, 3, 8, 1, 2, 3], 11], expected: 2 },
    { input: [[1, 4, 16, 22, 5, 7, 8, 9, 10], 95], expected: 0 },

    // Edge cases
    { input: [[], 7], expected: 0 },
    { input: [[7], 7], expected: 1 },
    { input: [[8], 7], expected: 1 },
    { input: [[6], 7], expected: 0 },

    // Whole array needed
    { input: [[1, 2, 3, 4], 10], expected: 4 },
    { input: [[1, 1, 1, 1, 1], 5], expected: 5 },
    { input: [[1, 1, 1, 1, 1], 6], expected: 0 },

    // Single element enough
    { input: [[1, 2, 10, 3], 10], expected: 1 },
    { input: [[5, 1, 2, 3], 5], expected: 1 },
    { input: [[1, 2, 3, 100], 50], expected: 1 },

    // Multiple valid windows
    { input: [[1, 2, 3, 4, 5], 11], expected: 3 },
    { input: [[1, 2, 3, 4, 5], 15], expected: 5 },
    { input: [[1, 2, 3, 4, 5], 16], expected: 0 },

    // Repeated values
    { input: [[2, 2, 2, 2, 2], 6], expected: 3 },
    { input: [[2, 2, 2, 2, 2], 4], expected: 2 },
    { input: [[2, 2, 2, 2, 2], 11], expected: 0 },

    // Larger mixed positive values
    { input: [[5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15], expected: 2 },
    { input: [[1, 10, 5, 2, 7], 9], expected: 1 },
    { input: [[1, 10, 5, 2, 7], 14], expected: 2 },
];

runTests(minSubArrayLen, testCases);