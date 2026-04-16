function thirdMax(arr: number[]): number {
    const newArr = new Array(3);
    newArr[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] === undefined) {
                newArr[j] = arr[i];
                break
            } else if (newArr[j] === arr[i]) {
                break
            } else if (arr[i] > newArr[j]) {
                let noSmallValueFound = true;
                while (noSmallValueFound) {
                    if (arr[i] > newArr[j]) {
                        let temp = newArr[j];
                        newArr[j] = arr[i];
                        arr[i] = temp;
                    } else {
                        noSmallValueFound=false
                    }

                }
            }
        }
    }
    return newArr[2] ?? newArr[0]
};