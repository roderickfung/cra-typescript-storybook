export interface IColors {
	white: string;
	black: string;

	primary: string;
	secondary: string;
	success: string;
	info: string;
	warning: string;
	error: string;

	gray10: string;
	gray20: string;
	gray30: string;
	gray40: string;
	gray50: string;
	gray60: string;
}

const COLORS: IColors = {
	white: "#FFFFFF",
	black: "#000000",

	primary: "#00B9FF",
	secondary: "#FFC319",
	success: "#81C625",
	info: "44B1FF",
	warning: "#FFC021",
	error: "#FF4238",

	gray10: "#ebebeb",
	gray20: "#b1b3b3",
	gray30: "#888b8d",
	gray40: "#5a5a5a",
	gray50: "#262626",
	gray60: "#1B1B1A",
};

export default COLORS;
