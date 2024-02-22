import { BaseFieldRenderer, renderOptions } from "./BaseFieldRenderer";

export class CheckboxRenderer extends BaseFieldRenderer {
  render(options?: renderOptions): Node {
    const wrapper = document.createElement("div");
    wrapper.classList.add("mb-2");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = this.field.name;
    checkboxInput.name = this.field.name;
    if (this.field.checked) checkboxInput.checked = true;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.classList.add("d-inline-block", "ps-2");
    checkboxLabel.htmlFor = this.field.name;
    checkboxLabel.textContent = this.field.label;

    wrapper.appendChild(checkboxInput);
    wrapper.appendChild(checkboxLabel);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("submit-btn", "mt-2", "d-block");
    nextButton.addEventListener("click", () => {
      options?.onSuccess(checkboxInput.checked);
    });

    wrapper.appendChild(nextButton);

    return wrapper;
  }
}
