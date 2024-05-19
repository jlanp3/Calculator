import { useEffect, useRef, useState } from "react";
import "./Calculator.css";
import Buttons from "./Buttons";

const Calculator = () => {
  const [dig, setDig] = useState("");
  const [ope, setOpe] = useState("");
  const [res, setRes] = useState("");

  useEffect(() => {
    if (dig) {
      screen(dig);
    }
  }, [dig]);

  const dispIni = useRef(null);

  const iniNum = "0";

  const handleClick = (e) => {
    if (e.target.matches("button")) {
      let key = e.target.value;
      const action = e.target.dataset.action;

      if (!action) {
        console.log("key");

        if (
          dispIni.current.textContent === "+" ||
          dispIni.current.textContent === "x" ||
          dispIni.current.textContent === "/"
        ) {
          dispIni.current.textContent = "";
        }

        if (dispIni.current.textContent !== "0" || key !== "0") {
          if (dispIni.current.textContent === "0") {
            dispIni.current.textContent = key;
            setDig(key);
          } else {
            dispIni.current.textContent = dispIni.current.textContent + key;
            setDig((prevState) => {
              return prevState + key;
            });
          }
        }
      }

      if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
      ) {
        console.log("operator");
        if (res) {
          dispIni.current.textContent = key;
          console.log("if res", res);
          let test = res;
          setDig(test);
          setRes("");
        }

        if (!dig.match(/\d*([+]|[x]|[/]|[-]|[*])$/)) {
          console.log("in dig regex");
          if (key === "x") {
            dispIni.current.textContent = key;
            setDig((prevState) => {
              return prevState + "*";
            });
          } else {
            dispIni.current.textContent = key;
            setDig((prevState) => {
              return prevState + key;
            });
          }
        } else {
          if (dig.slice(-1) === "-" && !dig.match(/-{2}$/) && key === "-") {
            console.log("in else if");
            dispIni.current.textContent = key;
            let val = dig + key;
            setDig(val);
          } else {
            if (dig.match(/-{2}$/) && key !== "-") {
              console.log("in else delete --");
              dispIni.current.textContent = key;
              let val = dig.slice(0, -2) + key;
              setDig(val);
            } else if (dig.match(/\d*([+]|[x]|[/]|[*])$/) && key === "-") {
              //console.log("in the +- situation");
              dispIni.current.textContent = key;
              setDig((prevState) => {
                return prevState + key;
              });
            } else if (dig.match(/([+]|[/]|[*])[-]{1}/)) {
              console.log("in the +- situation");
              dispIni.current.textContent = key;
              let val = dig.slice(0, -2) + key;
              setDig(val);
            } else {
              console.log("in else");
              dispIni.current.textContent = key;
              let res = dig.replace(/.$/, key);
              setDig(res);
            }
          }
        }
      }

      if (action === "decimal") {
        console.log("decimal");
        if (!dispIni.current.textContent.includes(".")) {
          if (dispIni.current.textContent === "0") {
            if (dig) {
              dispIni.current.textContent = "0" + key;
              setDig((prevState) => {
                return prevState + key;
              });
            } else {
              dispIni.current.textContent = dispIni.current.textContent + key;
              setDig("0" + key);
            }
          } else {
            dispIni.current.textContent = dispIni.current.textContent + key;
            setDig((prevState) => {
              return prevState + key;
            });
          }
        }
      }

      if (action === "clear") {
        console.log("clear");
        clear();
      }

      if (action === "calculate") {
        console.log("calculate");
        if (dig.includes("--")) {
          try {
            let result = dig.replaceAll("--", "-");
            let eva = eval(result);
            dispIni.current.textContent = eva;
            console.log(eva);
          } catch {
            dispIni.current.textContent = NaN;
          }
        } else {
          try {
            let eva = eval(dig);
            setRes(eva);
            let operation = dig + "=" + eva;
            setDig(operation);
            dispIni.current.textContent = eva;
            console.log(operation);
          } catch {
            dispIni.current.textContent = NaN;
          }
        }

        //console.log(eval(result));
      }
    }
  };

  const screen = (dig) => {
    let test = dig;

    setOpe((prevState) => {
      return test;
    });
  };

  const clear = () => {
    dispIni.current.textContent = iniNum;
    setDig("");
    setOpe("");
    setRes("");
  };

  return (
    <div className="calculator">
      <div className="formulaScreen">{ope}</div>
      <div ref={dispIni} id="display">
        {iniNum}
      </div>
      <Buttons handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
