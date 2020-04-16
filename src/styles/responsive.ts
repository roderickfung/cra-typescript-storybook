export interface IResponsive {
	mobile: number;
	tablet: number;
	desktop: number;
	extra: number;
}

const RESPONSIVE: IResponsive = {
	mobile: 600,
	tablet: 800,
	desktop: 1024,
	extra: 1800,
};

export default RESPONSIVE;
