import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Input, { InputType } from './index';

const Wrapper = styled.section`
	width: 300px;
`;

const InputDemo = () => {
	const [value, setValue] = useState<InputType>(
		""
	);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

	return (
		<Wrapper>
			<Input value={value} onChange={onChange} />
		</Wrapper>
	);
};

storiesOf("Input", module).add("default", () => <InputDemo />);
