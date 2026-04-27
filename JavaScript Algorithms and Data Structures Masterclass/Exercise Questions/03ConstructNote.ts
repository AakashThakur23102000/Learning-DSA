import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Frequency Counter - constructNote

Write a function called constructNote, which accepts two strings:
1. message
2. letters

The function should return true if the message can be built with the letters
that you are given, otherwise return false.

Assume that there are only lowercase letters and no space or special characters
in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M + N)
Space Complexity: O(N)

Examples:
constructNote("aa", "abc") // false
constructNote("abc", "dcba") // true
constructNote("aabbcc", "bcabcaddff") // true
*/

function constructNote(message: string, letters: string): boolean {
    // Write your code here
    const obj: Record<string, number> = {};
    for (var i = 0; i < message.length; i++) {
        if (Object.hasOwn(obj, message[i])) {
            obj[message[i]] = obj[message[i]] + 1;
        } else {
            obj[message[i]] = 1;
        }
    }

    for (var i = 0; i < letters.length; i++) {
        if (Object.hasOwn(obj, letters[i])) {
            if (obj[letters[i]] === 1) {
                delete obj[letters[i]];
            } else {
                obj[letters[i]] = obj[letters[i]] - 1;
            }
        }
    }
    return Object.keys(obj).length === 0;
}

const testCases: TestCase<[string, string], boolean>[] = [
    { input: ["aa", "abc"], expected: false },
    { input: ["abc", "dcba"], expected: true },
    { input: ["aabbcc", "bcabcaddff"], expected: true },

    { input: ["", ""], expected: true },
    { input: ["", "abc"], expected: true },
    { input: ["a", ""], expected: false },
    { input: ["a", "a"], expected: true },
    { input: ["a", "b"], expected: false },

    { input: ["aa", "aab"], expected: true },
    { input: ["aaa", "aa"], expected: false },
    { input: ["abc", "abc"], expected: true },
    { input: ["abc", "ab"], expected: false },
    { input: ["abc", "aabbcc"], expected: true },

    { input: ["hello", "helloworld"], expected: true },
    { input: ["hello", "helo"], expected: false },
    { input: ["leetcode", "letcodee"], expected: true },
    { input: ["leetcode", "letcode"], expected: false },

    { input: ["zzzz", "zzzzzz"], expected: true },
    { input: ["zzzzzzz", "zzzz"], expected: false },
    { input: ["abcabc", "aabbcc"], expected: true },
    { input: ["abcabc", "abcab"], expected: false },

    { input: ["mississippi", "issipmisssip"], expected: true },
    { input: ["mississippi", "issipmissi"], expected: false },
    { input: ["banana", "aaabnn"], expected: true },
    { input: ["banana", "aabnn"], expected: false },

    { input: ["programming", "gimnoprrammg"], expected: true },
    { input: ["programming", "programin"], expected: false },
    { input: ["frequency", "queeefrcnxy"], expected: true },
    { input: ["frequency", "frequency"], expected: true },

    { input: ["aaaaab", "baaaaa"], expected: true },
    { input: ["aaaaab", "aaaaa"], expected: false },
    { input: ["xyz", "zyx"], expected: true },
    { input: ["xyz", "xy"], expected: false },

    { input: ["abcde", "edcba"], expected: true },
    { input: ["abcde", "edcbb"], expected: false },
    { input: ["testing", "gnitset"], expected: true },
    { input: ["testing", "gnitse"], expected: false },

    { input: ["note", "tone"], expected: true },
    { input: ["note", "ton"], expected: false },
    { input: ["aabb", "ab"], expected: false },
    { input: ["aabb", "aabb"], expected: true },
];

runTests(constructNote, testCases);