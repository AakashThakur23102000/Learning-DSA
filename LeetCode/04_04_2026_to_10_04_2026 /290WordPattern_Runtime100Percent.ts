function wordPattern(r: string, s: string): boolean {
    var flag = true;
    var j = 0;
    const obj = {};
    for (var i = 0; i < r.length; i++) {
        var newWord = "";
        while (s[j] !== " " && j < s.length) {
            newWord = newWord + s[j];
            j++
        }
        if (newWord === "") return false;
        j++
        if (Object.hasOwn(obj, r[i])) {
            if (obj[r[i]] !== newWord) {
                flag = false;
                break;
            }
        } else {
            for (const value of Object.values(obj)) {
                if (value === newWord) {
                    flag = false;
                    break
                }
            }
            obj[r[i]] = newWord;
        }
    }
    if (j < s.length + 1) return false
    return flag;
};