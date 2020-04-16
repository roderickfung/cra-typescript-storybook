import React from "react";
import { InputBase } from "./styles";

export type InputType = string | number | string[] | undefined;
export interface IInputProps {
	value: InputType;
	type?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
