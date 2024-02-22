import { BaseFieldRenderer, renderOptions } from "./BaseFieldRenderer";

export class SelectRenderer extends BaseFieldRenderer {
  render(options?: renderOptions): Node {
    const wrapper = document.createElement("div");
    wrapper.classList.add("mb-2", "custom-select");

    const label = document.createElement("label");
    label.classList.add("d-block", "pb-1");
    label.textContent = this.field.label;

    wrapper.appendChild(label);

    const select = document.createElement("select");
    select.name = this.field.name;
    select.id = this.field.name;
    if (this.field.required) {
      select.setAttribute("required", "required");
    }

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Please select";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    this.field.options?.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      select.appendChild(optionElement);
    });

    wrapper.appendChild(select);

    select.addEventListener("change", () => {
      if (select.value !== "") {
        setTimeout(() => {
          options?.onSuccess(select.value);
        }, 1000);
      }
    });

    return wrapper;
  }
}
