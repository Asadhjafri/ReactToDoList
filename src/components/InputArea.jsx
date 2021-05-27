import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.textChange} type="text" value={props.textInput} />
      <button onClick={props.clicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
