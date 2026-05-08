function intersect(arr1: number[], arr2: number[]): number[] {
    const map = new Map<number, number>()
    const arr: number[] = []
    for (var i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.set(arr1[i], map.get(arr1[i])! + 1)
        } else {
            map.set(arr1[i], 1)
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (map.size < 1) {
            break
        } else if (map.has(arr2[i])) {
            arr.push(arr2[i])
            if (map.get(arr2[i]) === 1) {
                map.delete(arr2[i])
            } else {
                map.set(arr2[i], map.get(arr2[i]) - 1)
            }
        }
    }
    return arr
}