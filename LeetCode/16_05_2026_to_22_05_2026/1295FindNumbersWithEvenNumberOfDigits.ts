function findNumbers(arr: number[]): number {
    return arr.reduce((count, item) => {
        return String(item).length % 2 === 0 ? count + 1 : count;
    }, 0);
}