import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

storiesOf("Button", module)
	.add("Primary", () => (
		<Button onClick={() => false}>This is a Primary Button</Button>
	))
	.add("Secondary", () => (
		<Button secondary onClick={() => false}>
			This is a Secondary Button
		</Button>
	))
	.add("Primary Disabled", () => (
		<Button onClick={() => false} disabled>
			This is a Disabled Button
		</Button>
	))
	.add("Secondary Disabled", () => (
		<Button secondary onClick={() => false} disabled>
			This is a Secondary Disabled Button
		</Button>
	));
