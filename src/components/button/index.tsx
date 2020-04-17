import { IComponentBase } from 'interfaces/component';
export { default } from "./button";

export interface IButtonProps extends IComponentBase {
  onClick: () => void;
  disabled?: boolean;
  width?: number;
  secondary?: boolean;
}