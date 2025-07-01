console.log("1.Name and Address:");
let name = "Krishna Kumar";
let address = "Madhubani,Bihar,Pin code-847401";
console.log("Name:",name);
console.log("Address:", address);

console.log("\n 2.Value and Data-Type Check:");
let a = 42;
let b= 42;
if (a=== b) {
    console.log("Both value and type are same");
} else {
    console.log("Value or type is not same");
}

console.log("\n 3.Add Two Strings in Uppercase:");
 let str1 = "hello ";
 let str2 = "world";
 let combined = (str1 + str2).toUpperCase();
console.log("Combined Uppercase String:", combined);

console.log("\n 4.String Length in Bytes:");
function StringLength(str) {
    return new Blob([str]).size;
}
let Str = "krishna kumar";
console.log(`The byte length of "${Str}" is:`, StringLength(Str));

console.log("\n 5.Round Number to Specified Digits:");
function roundToDigits(num, digits) {
    return Number(num.toFixed(digits));
}
let number = 3.1415926535;
let rounded = roundToDigits(number, 3);
console.log('Rounded value of ${number} to 3 digits is:', rounded);
