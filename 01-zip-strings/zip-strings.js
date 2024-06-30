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
