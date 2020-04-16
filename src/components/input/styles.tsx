import styled from "styled-components";

export const InputBase = styled.input`
	padding: 10px 5px;
	border: 1px solid ${({ theme }) => theme.colors.gray50};
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.white};
	font-size: 14px;
	width: 100%;
`;