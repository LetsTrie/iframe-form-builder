export interface Field {
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
  checked?: boolean;
}

export type FieldType = "text" | "email" | "radio" | "select" | "checkbox";
