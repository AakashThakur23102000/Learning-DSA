import { runTests, type TestCase } from "../../utils/testRunner.ts";

/*
Frequency Counter / Multiple Pointers - areThereDuplicates

Implement a function called areThereDuplicates which accepts a variable
number of arguments and checks whether there are any duplicates among
the arguments passed in.

You can solve this using:
1. Frequency Counter Pattern
2. Multiple Pointers Pattern

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates("a", "b", "c", "a") // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

type DuplicateArg = string | number | boolean;

function areThereDuplicates(...arr: DuplicateArg[]): boolean {
    const obj: Record<string, number> = {};
    for (let i = 0; i < arr.length; i++) {
        let key: string;
        if (typeof arr[i] === "boolean") {
            key = arr[i] ? "BolTrue" : "BolFalse";
        } else if (typeof arr[i] === "number") {
            key = `Num_${arr[i]}`;
        } else {
            key = `Str_${arr[i]}`;
        }

        if (Object.hasOwn(obj, key)) {
            obj[key] = obj[key] + 1;
        } else {
            obj[key] = 1;
        }
    }
    for (const [_, value] of Object.entries(obj)) {
        if (value !== 1) {
            return true;
        }
    }
    return false;
}

const testCases: TestCase<DuplicateArg[], boolean>[] = [
    { input: [1, 2, 3], expected: false },
    { input: [1, 2, 2], expected: true },
    { input: ["a", "b", "c", "a"], expected: true },

    { input: [], expected: false },
    { input: [1], expected: false },
    { input: [1, 1], expected: true },
    { input: [1, 2], expected: false },
    { input: [5, 5, 5], expected: true },
    { input: [1, 2, 3, 4, 5], expected: false },
    { input: [1, 2, 3, 4, 1], expected: true },

    { input: ["a", "b", "c"], expected: false },
    { input: ["a", "a"], expected: true },
    { input: ["x", "y", "z", "x"], expected: true },
    { input: ["hello", "world", "hello"], expected: true },
    { input: ["one", "two", "three"], expected: false },

    { input: [true, false], expected: false },
    { input: [true, true], expected: true },
    { input: [false, false], expected: true },
    { input: [true, false, true], expected: true },

    { input: [1, "1"], expected: false },
    { input: [1, "1", 1], expected: true },
    { input: ["1", "1", 1], expected: true },
    { input: [0, false], expected: false },
    { input: [0, 0, false], expected: true },

    { input: [10, 20, 30, 40, 50], expected: false },
    { input: [10, 20, 30, 40, 10], expected: true },
    { input: [-1, -2, -3, -1], expected: true },
    { input: [-1, -2, -3, -4], expected: false },
    { input: [100, 200, 300, 100], expected: true },
    { input: ["a", 1, true, "b", 2, false], expected: false },
];

runTests(areThereDuplicates, testCases);