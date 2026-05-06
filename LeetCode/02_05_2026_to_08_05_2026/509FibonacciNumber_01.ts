function fib(n: number): number {
    const obj: Record<number, number> = {
        0: 0,
        1: 1,
    };
    function solve(num: number): number {
        if (obj[num] !== undefined) {
            return obj[num];
        }
        obj[num] = solve(num - 1) + solve(num - 2);
        return obj[num];
    }
    return solve(n);
}