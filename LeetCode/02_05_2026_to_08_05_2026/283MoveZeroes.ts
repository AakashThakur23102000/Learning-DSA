/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(arr: number[]): void {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            if (index !== i) {
                arr[i] = 0;
            }
            index++;
        }
    }
};