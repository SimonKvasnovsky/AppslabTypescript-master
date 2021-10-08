let str = "Radar", reverseStr = "";
let strLength = str.length;

for (let i = (strLength - 1); i >=0; --i) {
reverseStr = reverseStr + str.charAt(i);
}

if (str.toLowerCase()==(reverseStr.toLowerCase())) {
console.log(str + " is a Palindrome String.");
}
else {
console.log(str + " is not a Palindrome String.");
}