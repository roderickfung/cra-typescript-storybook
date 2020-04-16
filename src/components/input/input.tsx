import React, { ChangeEvent, useState } from "react";
import Button from "components/button";
import { InputBase, Wrapper } from "./styles";

export interface IInputProps {
	defaultValue: string | number | string[] | undefined;
	type: string;
	onSubmit: (value: string | number | string[] | undefined) => void;
}

const Input = ({ defaultValue, onSubmit, type, ...props }: IInputProps) => {
	const [value, setValue] = useState(defaultValue);

	const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
		return setValue(e.target.value);
	};

	const submit = () => onSubmit(value);

	return (
		<Wrapper>
			<InputBase type={type} value={value} onChange={updateValue} {...props} />
			<Button onClick={submit}>Add</Button>
		</Wrapper>
	);
};

export default Input;
