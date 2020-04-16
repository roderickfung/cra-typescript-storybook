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
	transition: opacity 0.2s linear;
	${({ disabled }) =>
		!disabled &&
		css`
			:hover {
				opacity: 0.8;
			}
		`}
	${({ secondary, disabled }) => {
		if (disabled) {
			return css`
				background-color: ${({ theme }) => theme.colors.gray10};
				color: ${({ theme }) => theme.colors.gray60};
			`;
		} else if (secondary) {
			return css`
				border: 1px solid ${({ theme }) => theme.colors.primary};
				background-color: ${({ theme }) => theme.colors.white};
				color: ${({ theme }) => theme.colors.primary};
			`;
		} else {
			return css`
				border: 1px solid ${({ theme }) => theme.colors.primary};
				background-color: ${({ theme }) => theme.colors.primary};
				color: ${({ theme }) => theme.colors.white};
			`;
		}
	}}
`;
