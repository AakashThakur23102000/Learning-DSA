function isPowerOfTwo(n: number): boolean {
    if (n === 1) return true;
    if (n === 2) return true;
    if (n % 2 !== 0) return false;
    let sum = 2;
    do {
        sum = sum * 2;
    } while (sum <= n / 2)
    return sum === n;
};