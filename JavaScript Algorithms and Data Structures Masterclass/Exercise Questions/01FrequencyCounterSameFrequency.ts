import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Frequency Counter - sameFrequency

Write a function called sameFrequency.

Given two positive integers, find out if the two numbers have the same
frequency of digits.

Time: O(N)

Examples:
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
*/

function sameFrequency(num1: number, num2: number): boolean {
    // Write your code here
    const str1 = String(num1);
    const str2 = String(num2);
    if (str1.length !== str2.length) return false;
    const set = new Set<string>();
    for (let i = 0; i < str1.length; i++) {
        if (set.has(str2[i])) {
            set.delete(str2[i])
        } else {
            set.add(str2[i])
        }
        if (set.has(str1[i])) {
            set.delete(str1[i])
        } else {
            set.add(str1[i])
        }
    }
    if (set.size > 0) return false;
    return true;
}


const testCases: TestCase<[number, number], boolean>[] = [
    { input: [182, 281], expected: true },
    { input: [34, 14], expected: false },
    { input: [3589578, 5879385], expected: true },
    { input: [22, 222], expected: false },

    { input: [12345, 54321], expected: true },
    { input: [112233, 332211], expected: true },
    { input: [112, 121], expected: true },
    { input: [112, 122], expected: false },
    { input: [1000, 10], expected: false },
    { input: [9090, 9900], expected: true },

    { input: [1, 1], expected: true },
    { input: [1, 2], expected: false },
    { input: [111, 111], expected: true },
    { input: [111, 11], expected: false },
    { input: [123, 321], expected: true },
    { input: [123, 322], expected: false },
    { input: [987654321, 123456789], expected: true },
    { input: [987654321, 123456788], expected: false },
    { input: [100200, 200100], expected: true },
    { input: [100200, 20010], expected: false },

    { input: [4444, 4444], expected: true },
    { input: [4444, 444], expected: false },
    { input: [1212, 2121], expected: true },
    { input: [1212, 2111], expected: false },
    { input: [123456789, 987654321], expected: true },
    { input: [123456789, 987654320], expected: false },
    { input: [101010, 110001], expected: true },
    { input: [101010, 110000], expected: false },
    { input: [555123, 123555], expected: true },
    { input: [555123, 123556], expected: false },

    { input: [24680, 86420], expected: true },
    { input: [24680, 86421], expected: false },
    { input: [123123, 321321], expected: true },
    { input: [123123, 321322], expected: false },
    { input: [7007, 7700], expected: true },
    { input: [7007, 707], expected: false },
    { input: [990099, 999900], expected: true },
    { input: [990099, 999000], expected: false },
    { input: [123400, 432100], expected: true },
    { input: [123400, 432110], expected: false },

    { input: [1000001, 1100000], expected: true },
    { input: [1000001, 100000], expected: false },
    { input: [13579, 97531], expected: true },
    { input: [13579, 97530], expected: false },
    { input: [222333, 333222], expected: true },
    { input: [222333, 333223], expected: false },
    { input: [1234554321, 1122334455], expected: true },
    { input: [1234554321, 1122334445], expected: false },
    { input: [808080, 880800], expected: true },
    { input: [808080, 880000], expected: false },
];


runTests(sameFrequency, testCases);