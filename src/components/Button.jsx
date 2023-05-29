import React from "react";

export const Button = (props) => {
  return <button className={`border p-2 rounded-lg text-white hover:scale-110  ${props.className}`} onClick={props.onClick}>{props.children}</button>;
};
