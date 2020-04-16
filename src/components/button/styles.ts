import styled, { css } from "styled-components";

interface IButtonBaseProps {
	width?: string | number;
	secondary?: boolean;
	disabled?: boolean;
}

export const ButtonBase = styled.button<IButtonBaseProps>`
	padding: 10px 5px;
	width: ${({ width }) => width || 200}px;
	border-radius: 5px;
	font-size: 14px;
	cursor: pointer;
	transition: border-width 0.1s linear;
	${({ disabled, secondary }) => {
		if (!disabled && secondary) {
			return css`
				:hover {
					border-bottom-width: 2px;
					border-bottom-color: teal;
					border-bottom-style: solid;
				}
			`;
		} else if (!disabled && !secondary) {
			return css`
				:hover {
					border-bottom-width: 2px;
					border-bottom-color: lightgray;
					border-bottom-style: solid;
				}
			`;
		}
	}}
	${({ secondary, disabled }) => {
		if (disabled) {
			return css`
				background-color: lightgray;
				color: darkslategray;
			`;
		} else if (secondary) {
			return css`
				border: 1px solid teal;
				background-color: white;
				color: teal;
			`;
		} else {
			return css`
				border: none;
				background-color: teal;
				color: white;
			`;
		}
	}}
`;
