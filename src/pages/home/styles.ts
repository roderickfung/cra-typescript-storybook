import styled from "styled-components";

export const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const InputWrapper = styled.article`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PostWrapper = styled.article`
	border: 2px solid ${({ theme }) => theme.colors.black};
	margin: 10px;
	padding: 10px;
	flex: 1;
`;
