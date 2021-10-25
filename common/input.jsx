import React, { useRef,useEffect } from "react";

const Input = ({ type, placeholder, value, onChange, className, name,reference }) => {
  // const inputRef= useRef(reference)
  // console.log(inputRef.current.name)
  return (
    <React.Fragment>
      <input
        ref={reference}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
      />
    </React.Fragment>
  );
};

export default Input;
