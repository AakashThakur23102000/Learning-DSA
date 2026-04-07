function reverseString(s: string[]): void {
    for (var i = 0; i < (s.length  - 1)/ 2; i++) {
        var j = s.length - 1 - i;
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
};