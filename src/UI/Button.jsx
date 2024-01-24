import React from "react";

const Button = ({ textOnly, className, children, ...props }) => {
  let classes = textOnly ? "text-button" : "button";
  classes += " " + className;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
