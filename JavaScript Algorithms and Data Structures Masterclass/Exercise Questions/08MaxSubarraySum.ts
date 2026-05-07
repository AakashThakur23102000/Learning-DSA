import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Sliding Window - maxSubarraySum

Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed
to the function.

A subarray must consist of consecutive elements from the original array.

Examples:
maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubarraySum([2, 3], 3) // null

Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/

function maxSubarraySum(arr: number[], num: number): number | null {
    // Write your code here
    return null;
}

const testCases: TestCase<[number[], number], number | null>[] = [
    { input: [[100, 200, 300, 400], 2], expected: 700 },
    { input: [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4], expected: 39 },
    { input: [[-3, 4, 0, -2, 6, -1], 2], expected: 5 },
    { input: [[3, -2, 7, -4, 1, -1, 4, -2, 1], 2], expected: 5 },
    { input: [[2, 3], 3], expected: null },

    // Edge cases
    { input: [[], 1], expected: null },
    { input: [[5], 1], expected: 5 },
    { input: [[5], 2], expected: null },
    { input: [[1, 2, 3], 3], expected: 6 },
    { input: [[1, 2, 3], 1], expected: 3 },

    // All positive numbers
    { input: [[1, 2, 3, 4, 5], 2], expected: 9 },
    { input: [[1, 2, 3, 4, 5], 3], expected: 12 },
    { input: [[10, 20, 30, 40, 50], 2], expected: 90 },
    { input: [[10, 20, 30, 40, 50], 4], expected: 140 },

    // Negative numbers
    { input: [[-1, -2, -3, -4], 2], expected: -3 },
    { input: [[-5, -1, -3, -2], 2], expected: -4 },
    { input: [[-10, -20, -30], 1], expected: -10 },
    { input: [[-10, -20, -30], 2], expected: -30 },

    // Mixed positive and negative
    { input: [[4, -1, 2, 1], 2], expected: 3 },
    { input: [[4, -1, 2, 1], 3], expected: 5 },
    { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 3], expected: 6 },
    { input: [[5, -2, 3, 1, -1, 2], 3], expected: 6 },

    // Zero cases
    { input: [[0, 0, 0, 0], 2], expected: 0 },
    { input: [[0, 1, 0, 2, 0], 2], expected: 2 },
    { input: [[1, 0, 2, 0, 3], 2], expected: 3 },
    { input: [[0, -1, 0, -2], 2], expected: -1 },

    // Larger windows
    { input: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
    { input: [[2, 3, 4, 1, 5], 4], expected: 13 },
    { input: [[9, 1, 2, 3, 9], 3], expected: 14 },
];

runTests(maxSubarraySum, testCases);