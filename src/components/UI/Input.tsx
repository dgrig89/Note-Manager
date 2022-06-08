import React from "react";

type inputsObjType = {
  id: string;
  type: string;
  placeholder: string;
};
interface inputsType {
  label: string;
  input: inputsObjType;
}

const Input = React.forwardRef<HTMLInputElement, inputsType>((props, ref) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </>
  );
});

export default Input;
