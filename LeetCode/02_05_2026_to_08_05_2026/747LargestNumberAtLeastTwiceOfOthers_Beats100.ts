function dominantIndex(arr: number[]): number {
    const obj: any = {};
    let max = -Infinity;
    let index = -1;
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i] * 2;
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    let flag = true;
    delete obj[max];
    for (const value of Object.values(obj)) {
        if (Number(value) > max) {
            flag = false;
            break;
        }
    }

    return flag ? index : -1;
};