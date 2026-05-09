import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock
on the ith day.

You want to maximize your profit by choosing a single day to buy one stock
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Examples:
maxProfit([7, 1, 5, 3, 6, 4]) // 5
maxProfit([7, 6, 4, 3, 1]) // 0
*/

function maxProfit(arr: number[]): number {
  let min = arr[0];
    let max = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            max = Math.max(max, arr[i] - min);
        }
    }
    return max;
}

const testCases: TestCase<[number[]], number>[] = [
    // LeetCode examples
    { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
    { input: [[7, 6, 4, 3, 1]], expected: 0 },

    // Edge cases
    { input: [[1]], expected: 0 },
    { input: [[1, 2]], expected: 1 },
    { input: [[2, 1]], expected: 0 },
    { input: [[5, 5]], expected: 0 },

    // Increasing / decreasing
    { input: [[1, 2, 3, 4, 5]], expected: 4 },
    { input: [[5, 4, 3, 2, 1]], expected: 0 },

    // Buy low, sell later
    { input: [[3, 1, 4]], expected: 3 },
    { input: [[2, 4, 1]], expected: 2 },
    { input: [[7, 2, 5, 1, 6]], expected: 5 },
    { input: [[9, 1, 3, 10]], expected: 9 },

    // Lowest price appears after a high price
    { input: [[10, 7, 5, 8, 11, 9]], expected: 6 },
    { input: [[8, 6, 7, 1, 2]], expected: 1 },

    // Repeated prices
    { input: [[3, 3, 3, 3]], expected: 0 },
    { input: [[3, 3, 5, 0, 0, 3, 1, 4]], expected: 4 },

    // Zero price cases
    { input: [[0, 1]], expected: 1 },
    { input: [[1, 0]], expected: 0 },
    { input: [[0, 0, 1, 0, 5]], expected: 5 },

    // Larger mixed cases
    { input: [[4, 7, 1, 5, 3, 6]], expected: 5 },
    { input: [[6, 1, 3, 2, 4, 7]], expected: 6 },
    { input: [[2, 1, 2, 0, 1]], expected: 1 },
];

runTests(maxProfit, testCases);