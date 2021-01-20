import React from "react";

const ValidationComponent = props => {
  let validationMessage = "";

  if (props.value <= 5) {
    validationMessage = "String is too short";
  } else {
    validationMessage = "Text long enough";
  }

  return (
    <div>
      <p>
        <b>{validationMessage}</b>
      </p>
    </div>
  );
};

export default ValidationComponent;
