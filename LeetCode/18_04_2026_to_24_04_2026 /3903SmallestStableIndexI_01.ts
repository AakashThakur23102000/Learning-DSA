function firstStableIndex(arr: number[], k: number): number {
    let count = -1;
    let max = arr[0];
    let min = null;
    for (let i = 0; i < arr.length; i++) {
        if (min === null) {
            min = arr[i];
            for (let j = i; j < arr.length; j++) {
                if (min > arr[j]) {
                    min = arr[j];
                }
            }
        }
        if (max < arr[i]) {
            max = arr[i];
        }
        if (k >= (max - min)) {
            count = i;
            break;
        }
        if (min === arr[i]) {
            min = null;
        }
    }
    return count;
}
