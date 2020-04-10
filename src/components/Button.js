import React from "react";

export const Button = ({ text, classname }) => {
  return <button className={"button " + classname}>{text}</button>;
};
