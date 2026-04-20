function findErrorNums(arr: number[]): number[] {
    arr.sort((a, b) => a - b);
    let dup = -1;
    let sum = 0;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            dup = arr[i];
        }
        sum += arr[i];
    }
    let expectedSum = (n * (n + 1)) / 2;
    let missing = expectedSum - (sum - dup);
    return [dup, missing];
}
