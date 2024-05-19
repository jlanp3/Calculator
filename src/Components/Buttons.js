import "./Buttons.css";

const Buttons = ({ handleClick }) => {
  return (
    <div className="buttons" onClick={handleClick}>
      <button id="clear" className="jumbo" value={"AC"} data-action="clear">
        AC
      </button>
      <button id="divide" value={"/"} data-action="divide">
        /
      </button>
      <button id="multiply" value={"x"} data-action="multiply">
        x
      </button>
      <button id="seven" value={"7"}>
        7
      </button>
      <button id="eight" value={"8"}>
        8
      </button>
      <button id="nine" value={"9"}>
        9
      </button>
      <button id="subtract" value={"-"} data-action="subtract">
        -
      </button>
      <button id="four" value={"4"}>
        4
      </button>
      <button id="five" value={"5"}>
        5
      </button>
      <button id="six" value={"6"}>
        6
      </button>
      <button id="add" value={"+"} data-action="add">
        +
      </button>
      <button id="one" value={"1"}>
        1
      </button>
      <button id="two" value={"2"}>
        2
      </button>
      <button id="three" value={"3"}>
        3
      </button>
      <button
        id="equals"
        style={{ position: "absolute", height: "130px" }}
        value={"="}
        data-action="calculate"
      >
        =
      </button>
      <button id="zero" className="jumbo" value={"0"}>
        0
      </button>
      <button id="decimal" value={"."} data-action="decimal">
        .
      </button>
    </div>
  );
};

export default Buttons;
