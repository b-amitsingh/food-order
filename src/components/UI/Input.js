import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />{" "}
      {/*same as <input id={props.input.id} type={props.input.type} /> */}
    </div>
  );
});

export default Input;
