import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks
whether the characters in the first string form a subsequence of the characters
in the second string.

In simple words:
Characters of first string should appear in second string in the same order.
They do not need to be continuous.

Examples:
isSubsequence("hello", "hello world") // true
isSubsequence("sing", "sting") // true
isSubsequence("abc", "abracadabra") // true
isSubsequence("abc", "acb") // false

Time Complexity: O(N + M)
Space Complexity: O(1)
*/

function isSubsequence(str1: string, str2: string): boolean {
    // Write your code here
    if (str1.length > str2.length) return false;
    const splittedArr = str1.split("");
    if (splittedArr.length === 0) return true;
    let num = 0;
    for (var i = 0; i < str2.length; i++) {
        if (str2[i] === splittedArr[num]) {
            num++;
        }
    }
    return num > splittedArr.length - 1;
}

const testCases: TestCase<[string, string], boolean>[] = [
    { input: ["hello", "hello world"], expected: true },
    { input: ["sing", "sting"], expected: true },
    { input: ["abc", "abracadabra"], expected: true },
    { input: ["abc", "acb"], expected: false },

    { input: ["", ""], expected: true },
    { input: ["", "abc"], expected: true },
    { input: ["a", ""], expected: false },
    { input: ["a", "a"], expected: true },
    { input: ["a", "b"], expected: false },

    { input: ["abc", "abc"], expected: true },
    { input: ["abc", "aabbcc"], expected: true },
    { input: ["abc", "acabc"], expected: true },
    { input: ["abc", "ab"], expected: false },
    { input: ["abc", "def"], expected: false },

    { input: ["ace", "abcde"], expected: true },
    { input: ["aec", "abcde"], expected: false },
    { input: ["aaa", "aaaaaa"], expected: true },
    { input: ["aaaaaaa", "aaa"], expected: false },
    { input: ["xyz", "xaybzc"], expected: true },
    { input: ["xyz", "xzy"], expected: false },

    { input: ["coding", "cooodddiiinnggg"], expected: true },
    { input: ["code", "cdoe"], expected: false },
    { input: ["dog", "dodge"], expected: true },
    { input: ["dog", "god"], expected: false },
    { input: ["sub", "sxxuxxb"], expected: true },

    { input: ["abc", "aaaaabbbbbccccc"], expected: true },
    { input: ["abc", "ccccbbbbaaaa"], expected: false },
    { input: ["same", "same"], expected: true },
    { input: ["same", "ssaaeemm"], expected: false },
    { input: ["same", "ssaamme"], expected: true },
    { input: ["same", "saem"], expected: false },
];
runTests(isSubsequence, testCases);