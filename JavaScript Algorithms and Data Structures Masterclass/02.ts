/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the first array
has its corresponding value squared in the second array.
The frequency of values must be the same.
Examples:
same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
*/


function same(arr1: number[], arr2: number[]): number | boolean {
    // check if length is mismatch
    if (arr1.length !== arr2.length) {
        return -1
    } else {
        const set = new Set();
        for (var i = 0; i < arr1.length; i++) {
            const square = arr1[i] ** 2;
            if (set.has(square)) {
                set.delete(square)
            } else {
                set.add(square);
            }
        
            if (set.has(arr2[i])) {
                set.delete(arr2[i]);
            } else {
                set.add(arr2[i]);
            }
        }
        return set.size === 0;
    }
} 

var output1 = same([1, 2, 3], [4, 1, 9]);
var output2 = same([1, 2, 3], [1, 9]);
var output3 = same([1, 2, 1], [4, 4, 1]);

console.log(output1)
console.log(output2)
console.log(output3)
