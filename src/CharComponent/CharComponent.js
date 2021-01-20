import React from "react";

const CharComponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAalign: "center",
    margin: "16px",
    border: "1px solid black",
    color: "red"
  };
  let title = "ClickToDelete '" + props.character + "' character";
  return (
    <div style={style} onClick={props.clicked} title={title}>
      <p>{props.character}</p>
    </div>
  );
};

export default CharComponent;
