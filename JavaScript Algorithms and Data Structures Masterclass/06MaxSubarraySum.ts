/*
Maximum Subarray Sum

Write a function called maxSubarraySum which accepts an array of integers
and a number called n.

The function should calculate the maximum sum of n consecutive elements
in the array.

If the array is empty or n is greater than the array length, return null.
*/

function maxSubarraySum(arr: number[], k: number): number | null {
    if (arr.length === 0 || k > arr.length || k <= 0) {
        return null;
    }
    let sum = 0;
    let max = -Infinity;
    let isCheckingRequired = true;

    for (let i = 0; i < arr.length; i++) {
        if (isCheckingRequired) {
            if (i < k - 1) {
                sum = sum + arr[i];
            } else if (i === k - 1) {
                sum = sum + arr[i];
                max = sum;
                isCheckingRequired = false;
            }
        } else {
            sum = sum + (arr[i] - arr[i - k]);
            if (max < sum) {
                max = sum;
            }
        }
    }
    return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([5], 1)); // 5
console.log(maxSubarraySum([5], 2)); // null
console.log(maxSubarraySum([10, 20, 30, 40], 2)); // 70
console.log(maxSubarraySum([-1, -2, -3, -4], 2)); // -3
console.log(maxSubarraySum([2, 3, -1, 4, 5], 3)); // 8
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39