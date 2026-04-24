function findDisappearedNumbers(arr: number[]): number[] {
    const newArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        newArr[arr[i] - 1] = 1;
    }
    const newArr2 = [];
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] === undefined) {
              newArr2.push(i+1)
        }
    }
    return newArr2
};