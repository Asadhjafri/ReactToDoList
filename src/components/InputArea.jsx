import React from "react";

function InputArea() {
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addToDoItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
