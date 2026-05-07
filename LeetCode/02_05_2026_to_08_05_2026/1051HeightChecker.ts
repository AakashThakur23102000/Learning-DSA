function heightChecker(arr: number[]): number {
    return arr.toSorted((a, b) => a - b).reduce((mismatch, item, index) => {
        return item !== arr[index] ? mismatch + 1 : mismatch
    }, 0)
}