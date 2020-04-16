import React from "react";
import { IInputProps } from './index';
import { InputBase } from "./styles";

const Input = ({ value, onChange, type = "string", ...props }: IInputProps) => (
	<InputBase
		className="input"
		type={type}
		value={value}
		onChange={onChange}
		{...props}
	/>
);

export default Input;
