const repeatString = function (str, n) {
  if (n < 0) return "ERROR";
  if (str == "") return "";
  let temp = "";
  for (n; n > 0; n--) {
    temp += str;
  }
  return temp;
};

// Do not edit below this line
module.exports = repeatString;
