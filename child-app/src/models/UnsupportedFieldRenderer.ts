import { BaseFieldRenderer } from "./BaseFieldRenderer";

export class UnsupportedFieldRenderer extends BaseFieldRenderer {
  render(): Node {
    const span = document.createElement("span");
    span.textContent = `Unsupported field type: ${this.field.type}`;
    return span;
  }
}
