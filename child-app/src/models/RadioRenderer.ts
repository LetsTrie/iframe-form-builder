import { BaseFieldRenderer, renderOptions } from "./BaseFieldRenderer";

export class RadioRenderer extends BaseFieldRenderer {
  render(options?: renderOptions): Node {
    const wrapper = document.createElement("div");
    wrapper.classList.add("mb-2");

    const label = document.createElement("label");
    label.classList.add("d-block", "pb-1");
    label.textContent = this.field.label;

    wrapper.appendChild(label);

    this.field.options?.forEach((option) => {
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.id = `${this.field.name}-${option}`;
      radioInput.name = this.field.name;
      radioInput.value = option;
      if (this.field.required) {
        radioInput.setAttribute("required", "required");
      }

      const radioLabel = document.createElement("label");
      radioLabel.classList.add("ps-2");
      radioLabel.htmlFor = `${this.field.name}-${option}`;
      radioLabel.textContent = option;

      const lineBreak = document.createElement("br");

      wrapper.appendChild(radioInput);
      wrapper.appendChild(radioLabel);
      wrapper.appendChild(lineBreak);

      radioInput.addEventListener("change", () => {
        setTimeout(() => {
          options?.onSuccess(radioInput.value);
        }, 1000);
      });
    });

    return wrapper;
  }
}
