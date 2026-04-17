function detectCapitalUse(str: string): boolean {
    if (str.length < 2) return true;
    function isUpperCase(word: string): boolean {
        const wordAscii = word.charCodeAt(0);
        if (wordAscii >= 65 && wordAscii <= 90) {
            return true;
        } else {
            return false;
        }
    }

    let isWordCorrect = true;
    let cases: "SERIES_UPPER" | "SERIES_LOWER";
    if (isUpperCase(str[0])) {
        if (isUpperCase(str[1])) {
            cases = "SERIES_UPPER"
        } else {
            cases = "SERIES_LOWER"
        }
        for (var i = 2; i < str.length; i++) {
            if (cases === "SERIES_UPPER" && !isUpperCase(str[i])) {
                isWordCorrect = false;
                break;
            } else if (cases === "SERIES_LOWER" && isUpperCase(str[i])) {
                isWordCorrect = false;
                break;
            }
        }
    } else {
        for (var i = 1; i < str.length; i++) {
            if (isUpperCase(str[i])) {
                isWordCorrect = false;
                break;
            }
        }
    }


    return isWordCorrect;
};