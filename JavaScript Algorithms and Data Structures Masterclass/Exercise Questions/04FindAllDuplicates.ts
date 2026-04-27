import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Frequency Counter - findAllDuplicates

Given an array of positive integers, some elements appear twice and others
appear once. Find all the elements that appear twice in this array.

Note: You can return the elements in any order.

Examples:
findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]) // [2, 3]
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // [1, 2, 3]

Time Complexity: O(n)
*/

function findAllDuplicates(arr: number[]): number[] {
    // Write your code here
    const set: Set<number> = new Set();
    const newSet: Set<number> = new Set();

    for (var i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            newSet.add(arr[i])
        } else {
            set.add(arr[i])
        }
    }
    return [...newSet];
}

const testCases: TestCase<[number[]], number[]>[] = [
    { input: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [2, 3] },
    { input: [[4, 3, 2, 1, 0]], expected: [] },
    { input: [[4, 3, 2, 1, 0, 1, 2, 3]], expected: [1, 2, 3] },

    { input: [[]], expected: [] },
    { input: [[1]], expected: [] },
    { input: [[1, 1]], expected: [1] },
    { input: [[1, 2, 3]], expected: [] },
    { input: [[1, 2, 1]], expected: [1] },
    { input: [[1, 2, 2, 3, 3]], expected: [2, 3] },
    { input: [[5, 5, 6, 6, 7, 8]], expected: [5, 6] },

    { input: [[10, 20, 30, 10]], expected: [10] },
    { input: [[10, 20, 30, 40]], expected: [] },
    { input: [[2, 2, 3, 4, 5, 5]], expected: [2, 5] },
    { input: [[9, 8, 7, 9, 8]], expected: [9, 8] },
    { input: [[100, 200, 100, 300, 200]], expected: [100, 200] },

    { input: [[1, 1, 2, 2, 3, 3]], expected: [1, 2, 3] },
    { input: [[1, 2, 3, 4, 5, 6]], expected: [] },
    { input: [[6, 5, 4, 3, 2, 1, 6]], expected: [6] },
    { input: [[0, 0, 1, 2, 3]], expected: [0] },
    { input: [[0, 1, 2, 3, 4]], expected: [] },

    { input: [[11, 12, 13, 11, 14, 15, 12]], expected: [11, 12] },
    { input: [[3, 3, 3]], expected: [3] },
    { input: [[4, 4, 4, 4]], expected: [4] },
    { input: [[1, 2, 1, 2, 1, 2]], expected: [1, 2] },
    { input: [[7, 7, 8, 8, 9, 9, 10]], expected: [7, 8, 9] },
];

runTests(findAllDuplicates, testCases);