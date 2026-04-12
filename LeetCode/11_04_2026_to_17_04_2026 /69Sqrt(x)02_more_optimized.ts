function mySqrt(x: number): number {
    if (x < 2) return x;
    let left = 1;
    let right = Math.floor(x / 2);
    let answer = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;
        if (square === x) {
            return mid;
        }
        if (square < x) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
}