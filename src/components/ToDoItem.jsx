import React, { useState } from "react";

function ToDoItem(props) {
  const [crossOut, setCrossOut] = useState(false);

  function handleCrossOut() {
    setCrossOut((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleCrossOut}>
      <li style={{ textDecoration: crossOut ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
