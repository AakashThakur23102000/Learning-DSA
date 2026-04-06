// write a function which takes string and return count of each character in a string
function countChar(str: string) {
    const obj: Record<string, number> = {};
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            if (Object.hasOwn(obj, str[i])) {
                obj[str[i]] = obj[str[i]] + 1
            } else {
                obj[str[i]] = 1;
            }
        }
    }
    return obj;
}

var output = countChar("Aakash Thakur");
console.log(output);