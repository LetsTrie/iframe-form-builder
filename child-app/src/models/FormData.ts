export interface Textfield {
  name: string;
  type: "text";
  label: string;
  placeholder: string;
  required: boolean;
}

export interface EmailField {
  name: string;
  type: "email";
  label: string;
  placeholder: string;
  required: boolean;
}

export interface RadioField {
  name: string;
  type: "radio";
  label: string;
  options: string[];
  required: boolean;
}

export interface SelectField {
  name: string;
  type: "select";
  label: string;
  options: string[];
  required: boolean;
}

export interface CheckboxField {
  name: string;
  type: "checkbox";
  label: string;
  checked: boolean;
}

export type Field =
  | Textfield
  | EmailField
  | RadioField
  | SelectField
  | CheckboxField;

export interface FormData {
  fields: Field[];
}
