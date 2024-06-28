function zipStrings(strA, strB) {
  let result = "";
  let totalLength = strA.length + strB.length;

  for (let index = 0; index < totalLength; index++) {
    if (index < strA.length) {
      result += strA[index];
    }
    if (index < strB.length) {
      result += strB[index];
    }
  }
  return result;
}

console.log(zipStrings("abc", "123")); // "a1b2c3"
console.log(zipStrings("abc", "1")); // "a1bc"
console.log(zipStrings("a", "123")); // "a123"
console.log(zipStrings("", "123")); // "123"
console.log(zipStrings("abc", "")); // "abc"
