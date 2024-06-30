function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  apiData.forEach(function (obj) {
    let keys = {};
    keys = mandatoryKeys.every(function (key) {
      return obj.hasOwnProperty(key);
    });
    if (keys) {
      result.push(obj);
    }
  });
  return result;
}

const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];
