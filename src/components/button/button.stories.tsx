import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

storiesOf("Button", module)
	.add("Default", () => (
		<>
			<Button onClick={() => false}>Primary Button</Button>
			<Button secondary onClick={() => false}>
				Secondary Button
			</Button>
		</>
	))
	.add("Disabled", () => (
		<>
			<Button onClick={() => false} disabled>
				Disabled Primary Button
			</Button>
			<Button secondary onClick={() => false} disabled>
				Disabled Secondary Button
			</Button>
		</>
	));
