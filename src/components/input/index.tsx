import { IComponentBase } from "interfaces/component";
export { default } from "./input";

export type InputType = string | number | string[] | undefined;
export interface IInputProps extends IComponentBase {
  value: InputType;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}