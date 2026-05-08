function canPlaceFlowers(arr: number[], n: number): boolean {
    if (n === 0) return true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            i = i + 1;
        } else if (
            arr[i] === 0 &&
            (i === 0 || arr[i - 1] === 0) &&
            (i === arr.length - 1 || arr[i + 1] === 0)
        ) {
            n = n - 1;
            if (n === 0) {
                break;
            }
            i = i + 1;
        }
    }
    return n === 0;
}