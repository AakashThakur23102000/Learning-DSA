import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Frequency Counter / Multiple Pointer - findPair

Given an unsorted array and a number n, find if there exists a pair of
elements in the array whose difference is n.

Return true if the pair exists, otherwise return false.

Examples:
findPair([6, 1, 4, 10, 2, 4], 2) // true
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1) // true
findPair([4, -2, 3, 10], -6) // true
findPair([6, 1, 4, 10, 2, 4], 22) // false
findPair([], 0) // false
findPair([5, 5], 0) // true
findPair([-4, 4], -8) // true
findPair([-4, 4], 8) // true
findPair([1, 3, 4, 6], -2) // true
findPair([0, 1, 3, 4, 6], -2) // true
findPair([1, 2, 3], 0) // false
*/

function findPair(arr: number[], n: number): boolean {
    // Write your code here
    return false;
}

const testCases: TestCase<[number[], number], boolean>[] = [
    { input: [[6, 1, 4, 10, 2, 4], 2], expected: true },
    { input: [[8, 6, 2, 4, 1, 0, 2, 5, 13], 1], expected: true },
    { input: [[4, -2, 3, 10], -6], expected: true },
    { input: [[6, 1, 4, 10, 2, 4], 22], expected: false },
    { input: [[], 0], expected: false },
    { input: [[5, 5], 0], expected: true },
    { input: [[-4, 4], -8], expected: true },
    { input: [[-4, 4], 8], expected: true },
    { input: [[1, 3, 4, 6], -2], expected: true },
    { input: [[0, 1, 3, 4, 6], -2], expected: true },
    { input: [[1, 2, 3], 0], expected: false },

    { input: [[1, 2, 3, 4, 5], 1], expected: true },
    { input: [[1, 2, 3, 4, 5], 4], expected: true },
    { input: [[1, 2, 3, 4, 5], 10], expected: false },
    { input: [[10, 20, 30, 40], 10], expected: true },
    { input: [[10, 20, 30, 40], -10], expected: true },
    { input: [[10, 20, 30, 40], 25], expected: false },

    { input: [[-10, -5, 0, 5, 10], 5], expected: true },
    { input: [[-10, -5, 0, 5, 10], -5], expected: true },
    { input: [[-10, -5, 0, 5, 10], 20], expected: true },
    { input: [[-10, -5, 0, 5, 10], -20], expected: true },
    { input: [[-10, -5, 0, 5, 10], 100], expected: false },

    { input: [[1], 0], expected: false },
    { input: [[1, 1], 0], expected: true },
    { input: [[1, 1, 1], 0], expected: true },
    { input: [[1, 2], 0], expected: false },
    { input: [[1, 2], 1], expected: true },
    { input: [[1, 2], -1], expected: true },

    { input: [[7, 3, 9, 1], 6], expected: true },
    { input: [[7, 3, 9, 1], -6], expected: true },
    { input: [[7, 3, 9, 1], 8], expected: true },
    { input: [[7, 3, 9, 1], -8], expected: true },
    { input: [[7, 3, 9, 1], 5], expected: false },

    { input: [[100, 50, 25, 75], 25], expected: true },
    { input: [[100, 50, 25, 75], -25], expected: true },
    { input: [[100, 50, 25, 75], 60], expected: false },
    { input: [[2, 4, 6, 8, 10], 2], expected: true },
    { input: [[2, 4, 6, 8, 10], -2], expected: true },
    { input: [[2, 4, 6, 8, 10], 3], expected: false },

    { input: [[0, 0], 0], expected: true },
    { input: [[0, 1, 2, 3], 0], expected: false },
];

runTests(findPair, testCases);