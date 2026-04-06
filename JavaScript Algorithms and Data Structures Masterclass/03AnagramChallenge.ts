/*
Given two strings, write a function to determine if the
second string is an anagram of the first.

An anagram is a word, phrase, or name formed by rearranging
the letters of another, such as cinema, formed from iceman.

Examples:
validAnagram("", "") // true
validAnagram("aaz", "zza") // false
validAnagram("anagram", "nagaram") // true
validAnagram("rat", "car") // false
validAnagram("awesome", "awesom") // false
validAnagram("qwerty", "qeywrt") // true
validAnagram("texttwisttime", "timetwisttext") // true
*/

function validAnagram(s: string, t: string): boolean {    
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
}

var output1 = validAnagram("", "");
var output2 = validAnagram("aaz", "zza");
var output3 = validAnagram("anagram", "nagaram");
var output4 = validAnagram("rat", "car");
var output5 = validAnagram("awesome", "awesom");
var output6 = validAnagram("qwerty", "qeywrt");
var output7 = validAnagram("texttwisttime", "timetwisttext");

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);
console.log(output7);