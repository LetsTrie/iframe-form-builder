import { convertCamelCaseToTitleCase } from "../helpers";
import { Field } from "./Field";

export interface renderOptions {
  onSuccess: (value: string | boolean) => void;
}

export abstract class BaseFieldRenderer {
  protected field: Field;

  constructor(field: Field) {
    this.field = field;
  }

  abstract render(options?: renderOptions): Node;

  protected validateInput(input: HTMLInputElement): {
    hasError: boolean;
    message?: string;
  } {
    if (this.field.required && !input.value.trim()) {
      return {
        hasError: true,
        message: `${convertCamelCaseToTitleCase(this.field.name)} is required!`,
      };
    }

    if (this.field.type === "email" && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        return {
          hasError: true,
          message: "Please enter a valid email address!",
        };
      }
    }

    return { hasError: false };
  }
}
