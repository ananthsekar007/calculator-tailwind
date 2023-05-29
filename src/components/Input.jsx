import React from "react";

export const Input = (props) => {
  return (
    <div>
      <input
        className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="number"
      />
    </div>
  );
};
