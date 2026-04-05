function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    } else {
        const obj: Record<string, number> = {};
        function isEmpty(obj: object): boolean {
            for (const key in obj) {
                if (Object.hasOwn(obj, key)) return false;
            }
            return true;
        }
        for (var i = 0; i < s.length; i++) {
            if (Object.hasOwn(obj, s[i])) {
                let newSum = obj[s[i]] + 1;
                if (newSum === 0) {
                    delete obj[s[i]];
                } else {
                    obj[s[i]] = newSum;
                }
            } else {
                obj[s[i]] = 1
            }
            if (Object.hasOwn(obj, t[i])) {
                let newSum = obj[t[i]] - 1;
                if (newSum === 0) {
                    delete obj[t[i]];
                } else {
                    obj[t[i]] = newSum;
                }
            } else {
                obj[t[i]] = -1
            }
        }
        return isEmpty(obj)
    }
};