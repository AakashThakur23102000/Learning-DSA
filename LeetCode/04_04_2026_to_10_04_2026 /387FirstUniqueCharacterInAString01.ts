function firstUniqChar(s: string): number {
    const obj: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        if (Object.hasOwn(obj, s[i])) {
            obj[s[i]] = obj[s[i]] + 1;
        } else {
            obj[s[i]] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}


// Still not optimized