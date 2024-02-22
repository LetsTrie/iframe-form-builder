import { BaseFieldRenderer } from "../models/BaseFieldRenderer";
import {
  CheckboxRenderer,
  RadioRenderer,
  SelectRenderer,
  TextInputRenderer,
  UnsupportedFieldRenderer,
} from "../models/BasicFieldRenderer";
import { Field } from "../models/Field";

export const fieldRenderers = {
  text: TextInputRenderer,
  email: TextInputRenderer,
  radio: RadioRenderer,
  select: SelectRenderer,
  checkbox: CheckboxRenderer,
};

export function createFieldRenderer(field: Field): BaseFieldRenderer {
  console.log("createFieldRenderer", field);
  const RendererClass = fieldRenderers[field.type] || UnsupportedFieldRenderer;
  return new RendererClass(field);
}
