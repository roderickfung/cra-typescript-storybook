export { default } from "./input";

export type InputType = string | number | string[] | undefined;
export interface IInputProps {
  value: InputType;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}