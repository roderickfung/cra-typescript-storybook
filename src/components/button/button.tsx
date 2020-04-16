import React, { ReactNode } from "react";
import { ButtonBase } from "./styles";

export interface IButtonProps {
	children: ReactNode;
	onClick: () => void;
	disabled?: boolean;
	width?: number;
	secondary?: boolean;
}

const Button = ({ children, disabled, onClick, ...props }: IButtonProps) => (
	<ButtonBase className="button" disabled={disabled} onClick={onClick} {...props}>
		{children}
	</ButtonBase>
);

export default Button;
