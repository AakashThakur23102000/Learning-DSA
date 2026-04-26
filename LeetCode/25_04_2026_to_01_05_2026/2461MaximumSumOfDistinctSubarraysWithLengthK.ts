function maximumSubarraySum(arr: number[], k: number): number {
    let sum = 0;
    let max = 0;
    const map = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        if (i >= k) {
            const removedValue = arr[i - k];
            sum = sum - removedValue;
            const removedValueCount = map.get(removedValue)! - 1;
            if (removedValueCount === 0) {
                map.delete(removedValue);
            } else {
                map.set(removedValue, removedValueCount);
            }
        }
        if (i >= k - 1 && map.size === k) {
            max = Math.max(max, sum);
        }
    }
    return max;
}