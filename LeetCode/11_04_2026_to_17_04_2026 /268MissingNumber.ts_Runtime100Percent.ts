function missingNumber(arr: number[]): number {
    const newArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr[arr[i] - 1] = arr[i]
        }
    }
    const index = newArr.findIndex(x => x === undefined);
    return index + 1
};