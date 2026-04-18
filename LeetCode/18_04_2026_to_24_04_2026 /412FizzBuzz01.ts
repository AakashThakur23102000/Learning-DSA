function fizzBuzz(n: number): string[] {
    const arr = new Array(n);
    for (var i = 0; i < arr.length; i++) {
        let iCurrent = i + 1
        if ((iCurrent % 3 === 0) && (iCurrent % 5 === 0)) {
            arr[i] = "FizzBuzz"
        } else if (iCurrent % 3 === 0) {
            arr[i] = "Fizz"
        } else if (iCurrent % 5 === 0) {
            arr[i] = "Buzz"
        } else {
            arr[i] = String(iCurrent)
        }
    }
    return arr;
};