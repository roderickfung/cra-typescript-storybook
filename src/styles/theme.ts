import COLORS, { IColors } from "styles/colors";

export interface ITheme {
	colors: IColors;
}

const THEME: ITheme = {
	colors: COLORS,
};

export default THEME;
