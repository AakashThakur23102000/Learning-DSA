/*
Write a function called sumZero which accepts a sorted array of integers.

The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero,
or undefined if a pair does not exist.

Examples:
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
sumZero([-4, -2, 0, 2, 5]) // [-2, 2]
sumZero([-5, -4, -3, -2, 0, 2, 4, 6]) // [-4, 4]
*/

function sumZero(arr: number[]): number[] | undefined {
    if (arr.length < 2) return undefined;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === 0) {
            return [arr[i], arr[j]]
        } else {
            if ((arr[i] * -1) > arr[j]) {
                i++
            } else {
                j--
            }
        }
    }
    return undefined;
}

let output1 = sumZero([-3, -2, -1, 0, 1, 2, 3]);
let output2 = sumZero([-2, 0, 1, 3]);
let output3 = sumZero([1, 2, 3]);
let output4 = sumZero([-4, -2, 0, 2, 5]);
let output5 = sumZero([-5, -4, -3, -2, 0, 2, 4, 6]);
let output6 = sumZero([-1, 1, 2, 3, 4, 5]);
let output7 = sumZero([-8, -7, -4, -1, 0, 1, 3, 2, 5]);


console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);
console.log(output7);