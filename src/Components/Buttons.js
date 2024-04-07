import "./Buttons.css";

const Buttons = ({ handleClick }) => {
  return (
    <div className="buttons">
      <button id="clear" className="jumbo" value={"AC"} onClick={handleClick}>
        AC
      </button>
      <button id="divide" value={"/"} onClick={handleClick}>
        /
      </button>
      <button id="multiply" value={"x"} onClick={handleClick}>
        x
      </button>
      <button id="seven" value={"7"} onClick={handleClick}>
        7
      </button>
      <button id="eight" value={"8"} onClick={handleClick}>
        8
      </button>
      <button id="nine" value={"9"} onClick={handleClick}>
        9
      </button>
      <button id="subtract" value={"-"} onClick={handleClick}>
        -
      </button>
      <button id="four" value={"4"} onClick={handleClick}>
        4
      </button>
      <button id="five" value={"5"} onClick={handleClick}>
        5
      </button>
      <button id="six" value={"6"} onClick={handleClick}>
        6
      </button>
      <button id="add" value={"+"} onClick={handleClick}>
        +
      </button>
      <button id="one" value={"1"} onClick={handleClick}>
        1
      </button>
      <button id="two" value={"2"} onClick={handleClick}>
        2
      </button>
      <button id="three" value={"3"} onClick={handleClick}>
        3
      </button>
      <button
        id="equals"
        style={{ position: "absolute", height: "130px" }}
        value={"="}
        onClick={handleClick}
      >
        =
      </button>
      <button id="zero" className="jumbo" value={"0"} onClick={handleClick}>
        0
      </button>
      <button id="decimal" value={"."} onClick={handleClick}>
        .
      </button>
    </div>
  );
};

export default Buttons;
