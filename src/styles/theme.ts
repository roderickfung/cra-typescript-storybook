import COLORS, { IColors } from "styles/colors";
import RESPONSIVE, { IResponsive } from "styles/responsive";

export interface ITheme {
	colors: IColors;
	responsive: IResponsive;
}

const THEME: ITheme = {
	colors: COLORS,
	responsive: RESPONSIVE,
};

export default THEME;
