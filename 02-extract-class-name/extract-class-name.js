function extractClassName(sessionTitle) {
  const month = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  const arr = sessionTitle.split(" ");
  const indexOfClass = arr.indexOf("Class");
  let result = "";

  if (arr[indexOfClass + 1] === "2022" || arr[indexOfClass + 1] === "2023") {
    result += arr[indexOfClass + 1];
  } else {
    return null;
  }

  if (month[arr[indexOfClass + 2]]) {
    result += "-" + month[arr[indexOfClass + 2]];
  } else {
    return null;
  }

  return result;
}
