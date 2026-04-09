/*
Count Unique Values

Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array.

There can be negative numbers in the array, but it will always be sorted.

Examples:
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

// using start and end
function countUniqueValues(arr: number[]): number {
    let start = 0;
    let end = arr.length - 1;
    const set = new Set<number>();
    while (start <= end) {
        set.add(arr[start]);
        set.add(arr[end]);
        start++;
        end--;
    }
    return set.size;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([5])); // 1
console.log(countUniqueValues([0, 0, 0, 0])); // 1
console.log(countUniqueValues([-5, -5, -4, -4, -3, -2, -2, -1])); // 5
console.log(countUniqueValues([1, 2, 3, 4, 5])); // 5
console.log(countUniqueValues([-3, -3, -3, -3, -3])); // 1
console.log(countUniqueValues([-10, -9, -9, -8, -7, -7, -7, -6, -5])); // 6
console.log(countUniqueValues([2, 2, 3, 3, 4, 4, 5, 5, 6, 6])); // 5
console.log(countUniqueValues([-2, -2, -1, -1, 0, 0, 1, 1, 2, 2])); // 5