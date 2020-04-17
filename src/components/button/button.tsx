import React from "react";
import { IButtonProps } from "./index";
import { ButtonBase } from "./styles";

const Button = ({ children, disabled, onClick, ...props }: IButtonProps) => (
	<ButtonBase className="button" disabled={disabled} onClick={onClick} {...props}>
		{children}
	</ButtonBase>
);

export default Button;
