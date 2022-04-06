let gateOp = 0, gateOpBra = 0, firstgateBra = 0, gateFBra = 0, gateLBra = 0, gateNum = 0, gateDot = 0, addedValue, giveLBra = 0, setPath = 0, cntFBra = 0, cntLBra = 0;
let number = "", bracket = "", disInp, result = "";
number += result + " ";

String.prototype.insert = function (index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substr(index);
  }

  return string + this;
};

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
}

function doubleMinus() {
  let dummyString = "";
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] == "-" && number[i + 1] == "-") {
      i++;
      continue;
    }
    dummyString += number[i];
  }
  dummyString += number[number.length - 1];
  console.log(dummyString);
  return dummyString;
}


function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function checkMinus() {
  let res = "", flag = 0;
  number = doubleMinus();
  while (1) {
    flag = 0;
    if (number.includes(" - ")) {
      flag = 1;
      let index = number.indexOf(" - ");
      console.log(index);
      number = number.replaceAt(index + 1, '+');
      // if (number[index + 3] != "-") {
      number = number.insert(index + 3, "-");
      // }
    }
    if (flag == 0) break;
    console.log(number);
  }
  return number;
}

function newGate() {
  gateOp = 0, gateOpBra = 0, firstgateBra = 0, gateFBra = 0, gateLBra = 0, gateNum = 0, gateDot = 0, addedValue, giveLBra = 0, setPath = 0, bracket = "", result = "",
    cntFBra = 0, cntLBra = 0, setPath = 0;
}
function reset() {
  document.getElementById('equal-btn').style.backgroundColor = "orange";
  newGate();
  disInp.value = "";
  number = "";
}

function doMath() {
  while (1) {
    let id1, id2, id3, id4, id5, num = "", res = "", n1 = "", n2 = "", rex = "", dis = "";
    console.log(res);
    number = checkMinus();
    if (number.includes("(")) {
      number = checkMinus();
      for (let i = number.length - 1; i >= 0; i--) {
        if (number[i] == ")") id2 = i;
        if (number[i] == '(') {
          id1 = i;
          break;
        }
      }
      for (let i = 0; i < id1; i++) num += number[i];
      for (let i = id1 + 1; i < id2; i++) res += number[i];
      let flag = 0;
      while (1) {
        let rep = "";
        n1 = "", n2 = "", id1, id2, id3, id4, id5;
        flag = 0;

        if (res.includes("^")) {
          console.log("GG");
          flag = 1;
          id3 = res.indexOf("^");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          // n1.reverse();
          for (let i = id3 + 2; i < res.length; i++) {
            // console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 5;
            }
          }
          n1 = reverse(n1);
          console.log(res, n1, n2);
          for (let i = 0; i <= id4; i++) rep += res[i];

          rep += (Math.pow(parseFloat(n1), parseFloat(n2))).toFixed(2);

          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rep += res[i];
          }
          res = rep;
        }


        else if (res.includes("/")) {
          flag = 1;
          id3 = res.indexOf("/");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          console.log(res, n1, n2);
          for (let i = 0; i <= id4; i++) rep += res[i];

          rep += (parseFloat(n1) / parseFloat(n2));

          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rep += res[i];
          }
          res = rep;
        }


        else if (res.includes("X")) {
          flag = 1;
          id3 = res.indexOf("X");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          // n1.reverse();
          for (let i = id3 + 2; i < res.length; i++) {
            // console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          console.log("id4-> " + id4);
          n1 = reverse(n1);
          console.log(res, n1, n2);
          for (let i = 0; i <= id4; i++) rep += res[i];

          rep += (parseFloat(n1) * parseFloat(n2));

          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rep += res[i];
          }
          res = rep;
        }


        else if (res.includes("M")) {
          flag = 1;
          id3 = res.indexOf("M");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          console.log(res, n1, n2);
          for (let i = 0; i <= id4; i++) rep += res[i];

          rep += (parseFloat(n1) % parseFloat(n2));

          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rep += res[i];
          }
          res = rep;
        }


        else if (res.includes("%")) {
          flag = 1;
          id3 = res.indexOf("%");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          // n1.reverse();
          for (let i = id3 + 2; i < res.length; i++) {
            // console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          console.log("id4-> " + id4);
          n1 = reverse(n1);
          console.log(res, n1, n2);
          for (let i = 0; i <= id4; i++) rep += res[i];

          rep += (((parseFloat(n1) * parseFloat(n2))) / 100);

          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rep += res[i];
          }
          res = rep;
        }


        else if (res.includes("+")) {
          flag = 1;
          id3 = res.indexOf("+");
          console.log(id3);
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          // n1.reverse();
          for (let i = id3 + 2; i < res.length; i++) {
            // console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          console.log(res, n1, n2);
          for (let i = 0; i <= id4; i++) rep += res[i];

          rep += (parseFloat(n1) + parseFloat(n2));

          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rep += res[i];
          }
          res = rep;
        }

        else if (res.includes(" - ")) {
          flag = 1;
          id3 = res.indexOf(" - ");
          id3 += 1;
          console.log(id3);
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          // n1.reverse();
          for (let i = id3 + 2; i < res.length; i++) {
            // console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          console.log(res, n1, n2);
          for (let i = 0; i <= id4; i++) rep += res[i];

          rep += (parseFloat(n1) - parseFloat(n2));

          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rep += res[i];
          }
          res = rep;
        }
        console.log(rep);
        if (flag == 0) break;
      }
      let dis = "";
      for (let i = 0; i < res.length; i++) {
        if (res[i] == " ") continue;
        dis += res[i];
      }
      console.log(dis);
      num += dis;
      for (let i = id2 + 1; i < number.length; i++) num += number[i];
      number = num;
    }
    else {
      n1 = "", n2 = "", id1, id2, id3, id4, id5, rep = "", rex = "", res = "";
      flag = 0;
      let mathFinal = 0;
      number = checkMinus();
      res = number;
      for (let i = 1; i < number.length; i++) {
        if (number[i] == ".") continue;
        if (isNaN(number[i])) {
          mathFinal = 1;
          break;
        }
      }
      if (mathFinal == 0) {
        console.log("gg -> " + number);
        let n3 = "" + number;
        n3 = parseFloat(n3).toFixed(2);
        number = "" + n3;
        return number;
      }
      while (1) {
        n1 = "", n2 = "", id1, id2, id3, id4, id5, rep = "", rex = "", flag = 0;
        if (res.includes("^")) {
          flag = 1;
          id3 = res.indexOf("^");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          rep += (Math.pow(parseFloat(n1), parseFloat(n2))).toFixed(2);
          rex = "";
          for (let i = 0; i <= id4; i++) rex += res[i];
          rex += rep;
          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rex += res[i];
          }
          res = rex;
          console.log(res, n1, n2);
        }


        else if (res.includes("/")) {
          flag = 1;
          id3 = res.indexOf("/");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          rep += (parseFloat(n1) / parseFloat(n2));
          rex = "";
          for (let i = 0; i <= id4; i++) rex += res[i];
          rex += rep;
          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rex += res[i];
          }
          res = rex;
          console.log(res, n1, n2);
        }


        else if (res.includes("X")) {
          flag = 1;
          id3 = res.indexOf("X");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          // console.log("--", n1, n2);
          rep += (parseFloat(n1) * parseFloat(n2));
          rex = "";
          for (let i = 0; i <= id4; i++) rex += res[i];
          rex += rep;
          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rex += res[i];
          }
          res = rex;
          console.log(res, n1, n2);
        }


        else if (res.includes("M")) {
          flag = 1;
          id3 = res.indexOf("M");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            console.log(res[i]);
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          rep += (parseFloat(n1) % parseFloat(n2));
          rex = "";
          for (let i = 0; i <= id4; i++) rex += res[i];
          rex += rep;
          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rex += res[i];
          }
          res = rex;
          console.log(res, n1, n2);
        }


        else if (res.includes("%")) {
          flag = 1;
          id3 = res.indexOf("%");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          // console.log("--", n1, n2);
          rep += (((parseFloat(n1) * parseFloat(n2))) / 100);
          rex = "";
          for (let i = 0; i <= id4; i++) rex += res[i];
          rex += rep;
          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rex += res[i];
          }
          res = rex;
          console.log(res, n1, n2);
        }


        else if (res.includes("+")) {
          flag = 1;
          id3 = res.indexOf("+");
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          rep += (parseFloat(n1) + parseFloat(n2));
          rex = "";
          console.log("res-> ", res);
          for (let i = 0; i <= id4; i++) {
            console.log(res[i]);
            rex += res[i];
          }
          rex += rep;
          for (let i = id5; i < res.length; i++) {
            console.log(res[i]);
            if (res[i] == undefined) break;
            rex += res[i];
          }
          res = rex;
        }

        else if (res.includes(" - ")) {
          flag = 1;
          id3 = res.indexOf(" - ");
          id3 += 1;
          for (let i = id3 - 2; i >= 0; i--) {
            if (res[i] == " ") {
              id4 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n1 += res[i];
              id4 = i - 1;
            }
          }
          for (let i = id3 + 2; i < res.length; i++) {
            if (res[i] == " ") {
              id5 = i;
              break;
            }
            else if (!isNaN(res[i]) || res[i] == "." || res[i] == "-") {
              n2 += res[i];
              id5 = i + 1;
            }
          }
          n1 = reverse(n1);
          rep += (parseFloat(n1) - parseFloat(n2));
          rex = "";
          for (let i = 0; i <= id4; i++) rex += res[i];
          rex += rep;
          for (let i = id5; i < res.length; i++) {
            if (res[i] == undefined) break;
            rex += res[i];
          }
          res = rex;
          console.log(res, n1, n2);
        }
        if (flag == 0) break;
      }
      let dis = "";
      for (let i = 0; i < res.length; i++) {
        if (res[i] == " ") continue;
        dis += res[i];
      }
      number = dis;
    }
  }
  let n3 = "" + number;
  n3 = parseFloat(n3).toFixed(2);
  number = "" + n3;
  return number;
}

function setDisplay(addedValue) {
  if (addedValue == "C") reset();
  if (setPath == 1) 
  {
    if (
      addedValue == "+" ||
      addedValue == "-" ||
      addedValue == "X" ||
      addedValue == "/" ||
      addedValue == "M" ||
      addedValue == "^" ||
      addedValue == "%"
    ) {
      number += addedValue + " ";
      disInp.value = number;
      // console.log(1);
      setPath = 0;

      document.getElementById('equal-btn').style.backgroundColor = "red";
    }
  }
  else 
  {
    if (number != "" && addedValue == "=" && giveLBra == 0 && gateNum == 1) {
      document.getElementById('equal-btn').style.backgroundColor = "orange";
      newGate();
      result = doMath();
      number = "" + result + " ";
      rep = "", res = "", result = "", rex = "", dis = "", n1 = "", n2 = "";
      disInp.value = number;
      setPath = 1;
      // console.log(2);
    }
    else if (!isNaN(addedValue) && gateLBra == 0) {
      if(cntFBra == 0) document.getElementById('equal-btn').style.backgroundColor = "green";
      else document.getElementById('equal-btn').style.backgroundColor = "red";
      number += addedValue;
      disInp.value = number;
      firstgateBra = 1;
      gateNum = 1;
      gateOp = 0;
      // console.log(3);
    }
    else if (addedValue == "." && gateDot == 0) {
      document.getElementById('equal-btn').style.backgroundColor = "green";
      number += addedValue;
      gateDot = 1;
      disInp.value = number;
      // console.log(4);
    }
    else if ((addedValue == "(" || addedValue == ")")) {
      if (firstgateBra == 0 && addedValue == "(") {
        document.getElementById('equal-btn').style.backgroundColor = "red";
        number += addedValue + " ";
        firstgateBra = 1;
        gateFBra = 1;
        disInp.value = number;
        bracket += "("
        giveLBra++;
        cntFBra++;
        // console.log(5);
      }
      else 
      {
        if (gateOp == 1 && addedValue == "(") {
          document.getElementById('equal-btn').style.backgroundColor = "red";
          number += addedValue + " ";
          disInp.value = number;
          gateOp = 0;
          gateNum = 0;
          gateFBra = 1;
          firstgateBra = 1;
          giveLBra++;
          cntFBra++;
          gateOpBra = 0;
          // console.log(6);
        }
        else if (gateNum == 1 && (gateFBra == 1 || firstgateBra == 1) && gateOpBra == 1 && addedValue == ")" && addedValue != ".") {
          if (giveLBra != 0) 
          {
            number += " " + addedValue;
            disInp.value = number;
            bracket += ")";
            gateLBra = 1;
            giveLBra--;
            // console.log(7);
            cntLBra++;

            if(cntFBra == cntLBra) 
            {
              cntFBra = 0, cntLBra = 0;
              document.getElementById('equal-btn').style.backgroundColor = "green";
            }
            else document.getElementById('equal-btn').style.backgroundColor = "red";
          }
          else {
            gateFBra = 0;
            gateLBra = 1;

            gateOp = 0;
            gateOpBra = 0;
            // console.log(8);
          }
        }
      }
    }
    else if (addedValue != ")" && isNaN(addedValue) && addedValue != "." && addedValue != "=") 
    {
      if ((gateOp == 0 && gateNum == 1) || gateLBra == 1) 
      {
        document.getElementById('equal-btn').style.backgroundColor = "red";
        if (gateFBra == 1 && gateNum == 1) gateOpBra = 1;

        number += " " + addedValue + " ";
        disInp.value = number;
        gateOp = 1;
        gateNum = 0;
        gateLBra = 0;
        gateDot = 0;
        // console.log(9);
      }
    }
  }
}

document.getElementById("keypad").addEventListener("click", function (event) {
  addedValue = event.target.innerText;
  disInp = document.getElementById("dip-input");
  setDisplay(addedValue);
});
