import React from "react";

const DigitButton = (props) => (
  <div className="btn" onClick={()=>props.clickAction(props.number)}>
    <div className="btn-container">
      <div className="number">
        {props.number}
      </div>
      <div className = "letters ">
        {props.letters}
      </div>
    </div>
  </div>
);

export default DigitButton
