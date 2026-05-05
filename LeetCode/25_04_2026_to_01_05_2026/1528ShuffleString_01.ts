function restoreString(str: string, arr: number[]): string {
    const newArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        newArr[arr[i]] = str[i]
    }
    return newArr.join("")
};