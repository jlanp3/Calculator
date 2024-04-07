// if (res.length > 1 && (dat === "+" || dat === "-")) {
//   setNum("");
//   setCal("");
//   setRes("");
// }

if (res.length) {
  setNum("");
  setCal("");
  // let test = String(res + cal);
  // console.log(test);
} else {
  setNum(dat);

  // if (dat === "AC") {
  //   setNum("");
  //   setCal("");
  //   setRes("");
  // }
}

if (dat === "AC") {
  setNum(0);
  setCal("");
  setRes("");
} else if (dat === "=") {
  if (cal) {
    let mod = cal.replace("x", "*");
    let result = eval(mod);
    setNum(`=${result}`);
    setRes(result);
  }
} else {
  if (num === 0) {
    setNum("");
    setNum(dat);
  } else {
    setNum((prevState) => {
      return prevState + dat;
    });
  }
}

// if (dat === "=") {
//   let mod = cal.replace("x", "*");
//   let result = eval(mod);
//   setNum(`=${result}`);
//   setRes(result);
// }

if (num === "+") {
  if (num !== 0) {
    setCal((prevState) => {
      return prevState + num;
    });
  }
} else {
  if (num.length) {
    setCal(num);
  }
}
