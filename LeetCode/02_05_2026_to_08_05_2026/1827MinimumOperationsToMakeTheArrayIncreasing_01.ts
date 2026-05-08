function minOperations(arr: number[]): number {
    if (arr.length < 2) return 0
    let max = arr[0]
    let count = 0
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] <= max) {
            max = max + 1;
            while (arr[i] !== max) {
                arr[i]++
                count++
            }
        } else {
            max = arr[i]
        }
    }
    return count
};