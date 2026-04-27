import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Multiple Pointers - averagePair

Write a function called averagePair.

Given a sorted array of integers and a target average, determine if there is
a pair of values in the array where the average of the pair equals the target
average.

There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)

Examples:
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false
*/

function averagePair(arr: number[], targetAverage: number): boolean {
    // Write your code here
    if (arr.length === 0) return false;
    let left = 0;
    let right = arr.length - 1;
    let avgBeforeDividedByTwo = targetAverage * 2;
    while (left < right) {
        if (arr[left] + arr[right] === avgBeforeDividedByTwo) return true;
        if ((arr[left] + arr[right]) < avgBeforeDividedByTwo) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

const testCases: TestCase<[number[], number], boolean>[] = [
    { input: [[1, 2, 3], 2.5], expected: true },
    { input: [[1, 3, 3, 5, 6, 7, 10, 12, 19], 8], expected: true },
    { input: [[-1, 0, 3, 4, 5, 6], 4.1], expected: false },
    { input: [[], 4], expected: false },

    { input: [[1, 2, 3], 2], expected: true },
    { input: [[1, 2, 3], 3], expected: false },
    { input: [[1, 2, 3, 4, 5], 4.5], expected: true },
    { input: [[1, 2, 3, 4, 5], 5], expected: false },

    { input: [[-5, -3, -1, 0, 2, 4, 6], 0.5], expected: true },
    { input: [[-5, -3, -1, 0, 2, 4, 6], 10], expected: false },
    { input: [[-10, -5, 0, 5, 10], 0], expected: true },
    { input: [[-10, -5, 0, 5, 10], 2.5], expected: true },

    { input: [[1, 1, 1, 1], 1], expected: true },
    { input: [[1, 1, 1, 1], 2], expected: false },
    { input: [[2], 2], expected: false },
    { input: [[2, 2], 2], expected: true },

    { input: [[0, 0, 0], 0], expected: true },
    { input: [[0, 1, 2, 3, 4], 1.5], expected: true },
    { input: [[0, 1, 2, 3, 4], 3.5], expected: true },
    { input: [[0, 1, 2, 3, 4], 4], expected: false },

    { input: [[5, 10, 15, 20], 12.5], expected: true },
    { input: [[5, 10, 15, 20], 17.5], expected: true },
    { input: [[5, 10, 15, 20], 11], expected: false },
    { input: [[1, 4, 6, 8, 10], 7], expected: true },

    { input: [[1, 4, 6, 8, 10], 6], expected: true },
    { input: [[1, 4, 6, 8, 10], 9], expected: true },
    { input: [[1, 4, 6, 8, 10], 10], expected: false },
    { input: [[-3, -2, -1, 0, 1, 2, 3], 0], expected: true },

    { input: [[-3, -2, -1, 0, 1, 2, 3], 1.5], expected: true },
    { input: [[-3, -2, -1, 0, 1, 2, 3], 4], expected: false },
];

runTests(averagePair, testCases);