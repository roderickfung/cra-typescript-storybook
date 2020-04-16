import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import Input from "./index";

const Wrapper = styled.section`
	width: 50%;
	margin: auto;
`;

const InputDemo = () => {
	const [value, setValue] = useState<string | number | string[] | undefined>(
		""
	);

	const onSubmit = (submittedValue: string | number | string[] | undefined) =>
		setValue(submittedValue);

	return (
		<Wrapper>
			<Input defaultValue={value} onSubmit={onSubmit} type="string" />
		</Wrapper>
	);
};

storiesOf("Input", module).add("default", () => <InputDemo />);
