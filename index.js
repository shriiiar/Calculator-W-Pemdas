let f = 0,
  g = 0,
  h = 0,
  passed = 0,
  final = 0,
  prev = 1,
  check1 = 0,
  check2 = 0,
  number = "",
  num1 = "",
  num2 = "";

let k = 0,
  l = 0,
  m = 0,
  n = 0,
  p = 0;
function reset(disInp) {
  f = 0;
  g = 0;
  h = 0;
  passed = 0;
  final = 0;
  prev = 1;
  check1 = 0;
  check2 = 0;
  number = "";
  num1 = "";
  num2 = "";
  k = 0;
  l = 0;
  m = 0;
  n = 0;
  p = 0;
  disInp.value = "";
}
function doMath(addedValue, disInp, finalResult) {
  (num1 = ""), (num2 = "");
  if (addedValue == "C") {
    reset(disInp);
  }
  if (k == 0) {
    if (
      addedValue == "+" ||
      addedValue == "-" ||
      addedValue == "X" ||
      addedValue == "/" ||
      addedValue == "MOD" ||
      addedValue == "^" ||
      addedValue == "%"
    ) {
      number += " " + addedValue + " ";
      disInp.value = number;
      k = 1;
    }
  }
  if (l == 0) {
    if (k == 1) {
      if (!isNaN(addedValue)) {
        m = 1;
        number += addedValue;
        disInp.value = number;
      }
      if (p == 0) {
        if (addedValue == ".") {
          p = 1;
          number += addedValue;
          disInp.value = number;
        }
      }
    }
  }
  if (m == 1) {
    if (addedValue == "=") {
      if (l == 0) {
        result = "";
        number += " = ";
        console.log(number);
        if (number.includes("+")) {
          getResult("+");
          result = parseFloat(num1) + parseFloat(num2);
          number += result;
        } else if (number[0] == "-") {
          let char;
          for (let i = 1; i < number.length; i++) {
            if (number[i] == "+") {
              char = number[i];
              break;
            }
            if (number[i] == "-") {
              char = number[i];
              break;
            }
            if (number[i] == "X") {
              char = number[i];
              break;
            }
            if (number[i] == "/") {
              char = number[i];
              break;
            }
            if (number[i] == "M") {
              char = number[i];
              break;
            }
            if (number[i] == "%") {
              char = number[i];
              break;
            }
            if (number[i] == "^") {
              char = number[i];
              break;
            }
          }
          getResult(char);
          if (char == "+") {
            result = parseFloat(num1) + parseFloat(num2);
            number += result;
          } else if (char == "-") {
            result = parseFloat(num1) - parseFloat(num2);
            console.log("RESSSSSSS", result);
            number += result;
          } else if (char == "X") {
            result = parseFloat(num1) * parseFloat(num2);
            number += result;
          } else if (char == "/") {
            result = parseFloat(num1) / parseFloat(num2);
            number += result;
          } else if (char == "M") {
            result = parseFloat(num1) % parseFloat(num2);
            number += result;
          } else if (char == "%") {
            result = (parseFloat(num1) * parseFloat(num2)) / 100;
            number += result;
          } else if (char == "^") {
            result = parseFloat(num1) + parseFloat(num2);
            number += result;
          }
        } else if (number.includes("-")) {
          getResult("-");
          result = parseFloat(num1) - parseFloat(num2);
          number += result;
        } else if (number.includes("X")) {
          getResult("X");
          result = parseFloat(num1) * parseFloat(num2);
          number += result;
        } else if (number.includes("/")) {
          getResult("/");
          result = parseFloat(num1) / parseFloat(num2);
          number += result;
        } else if (number.includes("^")) {
          getResult("^");
          result = Math.pow(parseFloat(num1), parseFloat(num2));
          number += result;
        } else if (number.includes("M")) {
          getResult("M");
          result = parseFloat(num1) % parseFloat(num2);
          number += result;
        } else if (number.includes("%")) {
          getResult("%");
          result = (parseFloat(num1) * parseFloat(num2)) / 100;
          number += result;
        }
        disInp.value = number;
        l = 1;
        number = "" + result;
        doMath(addedValue, disInp, finalResult);
        (k = 0), (l = 0), (m = 0), (n = 0), (p = 0);
      }
    }
  }
}

function getResult(path) {
  console.log(path);
  let id1, id2;
  // (num1 = ""), (num2 = "");
  id2 = number.indexOf("=");
  for (let i = 1; i < number.length; i++) {
    if (
      number[i] == "+" ||
      number[i] == "-" ||
      number[i] == "X" ||
      number[i] == "/" ||
      number[i] == "M" ||
      number[i] == "%" ||
      number[i] == '^'
    ) {
      id1 = i;
      break;
    }
  }
  console.log("XX " + id1 + " " + id2);
  for (let i = 0; i < id1 - 1; i++) num1 += number[i];

  if (path != "M") for (let i = id1 + 2; i < id2 - 1; i++) num2 += number[i];
  else for (let i = id1 + 4; i < id2 - 1; i++) num2 += number[i];
  console.log("ZZ " + num1 + " " + num2);
  console.log("WORK");
}

document.getElementById("keypad").addEventListener("click", function (event) {
  let finalResult;
  const addedValue = event.target.innerText;
  const disInp = document.getElementById("dip-input");
  if (addedValue == "C") {
    reset(disInp);
  }
  if (final == 0) {
    if (!isNaN(addedValue)) {
      number += addedValue;
      if (check1 == 1) check2 = 1;
      prev = 0;
    }
    if (addedValue == ".") {
      if (g == 0) number += addedValue;
      g = 1;
    }
    if (prev == 0) {
      if (f == 0) {
        if (
          addedValue == "+" ||
          addedValue == "-" ||
          addedValue == "X" ||
          addedValue == "/" ||
          addedValue == "MOD" ||
          addedValue == "^" ||
          addedValue == "%"
        ) {
          if (!f) {
            number += " " + addedValue + " ";
            f = 1;
            g = 0;
            check1 = 1;
          }
        }
      }
    }
    if (prev == 0) {
      if (check1 == 1) {
        if (check2 == 1) {
          if (addedValue == "=") {
            if (h == 0) {
              number += " = ";
              if (number.includes("+")) {
                getResult("+");
                let result = parseFloat(num1) + parseFloat(num2);
                number += result;
                finalResult = result;
              } else if (number.includes("-")) {
                getResult("-");
                let result = parseFloat(num1) - parseFloat(num2);
                number += result;
                finalResult = result;
              } else if (number.includes("X")) {
                getResult("X");
                let result = parseFloat(num1) * parseFloat(num2);
                number += result;
                finalResult = result;
              } else if (number.includes("/")) {
                getResult("/");
                let result = parseFloat(num1) / parseFloat(num2);
                number += result;
                finalResult = result;
              } else if (number.includes("^")) {
                getResult("^");
                let result = Math.pow(parseFloat(num1), parseFloat(num2));
                number += result;
                finalResult = result;
                //   console.log(num1 + " " + num2);
              } else if (number.includes("M")) {
                getResult("M");
                let result = parseFloat(num1) % parseFloat(num2);
                number += result;
                finalResult = result;
                //   console.log(num1 + " " + num2);
              } else if (number.includes("%")) {
                getResult("%");
                let result = (parseFloat(num1) * parseFloat(num2)) / 100;
                number += result;
                finalResult = result;
                //   console.log(num1 + " " + num2);
              }
            }
            disInp.value = number;
            h = 1;
            final = 1;
            passed = 1;
            number = finalResult;
          }
        }
      }
    }
    if (passed == 0) {
      disInp.value = number;
    }
  }
  if (final == 1) {
    if (addedValue == "C") {
      reset(disInp);
    } else {
      doMath(addedValue, disInp, finalResult);
    }
  }
});