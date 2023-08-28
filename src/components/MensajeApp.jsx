import React from "react";

const MensajeApp = (props) => {
  console.log(props.message);

  return <h3>{props.message}</h3>;
};

export default MensajeApp;
