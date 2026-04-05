function longestCommonPrefix(arr: string[]): string {
    if (arr.length === 0) return "";

    let mainStr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        while (!arr[i].startsWith(mainStr)) {
            mainStr = mainStr.slice(0, mainStr.length - 1);

            if (mainStr === "") {
                return "";
            }
        }
    }

    return mainStr;
}