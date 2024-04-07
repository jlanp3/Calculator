import { useEffect, useState } from "react";
import "./Calculator.css";
import Buttons from "./Buttons";

const Calculator = () => {
  const [num, setNum] = useState("");
  const [cal, setCal] = useState("");
  const [res, setRes] = useState("");

  useEffect(() => {
    // decimal numbers need to include
    //if (num) {
    if (num.includes("x")) {
      let mul = num.replace("x", "*");
      setCal(mul);
    } else {
      setCal(num);
    }
    //}
  }, [num]);

  const handleClick = (e) => {
    let dat = e.target.value;
    if (dat === "AC") {
      setNum("");
      setCal("");
      setRes("");
      // } else if (num === "=") {
      //   let result = eval(cal);
      //   setRes(result);
    } else if (dat === "=") {
      let result = eval(cal);
      setRes(result);
    } else if (dat === "+" || "-" || "/" || "x") {
      setNum((prevState) => {
        return prevState + dat;
      });
    }
  };

  return (
    <div className="calculator">
      <div className="formulaScreen">{cal ? cal : ""}</div>
      <div id="display">{res ? res : num.length ? num : 0}</div>
      <Buttons handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
