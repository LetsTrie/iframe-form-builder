import { BaseFieldRenderer, renderOptions } from "./BaseFieldRenderer";

export class TextInputRenderer extends BaseFieldRenderer {
  render(options?: renderOptions): Node {
    const wrapper = document.createElement("div");
    wrapper.classList.add("mb-2");

    const label = document.createElement("label");
    label.classList.add("d-block", "pb-1");
    label.textContent = this.field.label;

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("form-group");

    const input = document.createElement("input");
    input.classList.add("form-control");
    input.type = this.field.type;
    input.name = this.field.name;
    input.placeholder = this.field.placeholder || "";
    if (this.field.required) input.setAttribute("required", "required");

    const arrowButton = document.createElement("span");
    arrowButton.classList.add("fa", "fa-arrow-right", "form-control-icon");

    inputContainer.appendChild(input);
    inputContainer.appendChild(arrowButton);

    wrapper.appendChild(label);
    wrapper.appendChild(inputContainer);

    setTimeout(() => {
      input.focus();
    }, 0);

    const handleButtonClick = () => {
      const { hasError, message } = this.validateInput(input);

      input.classList.remove("border", "border-danger");

      const errorMessage = wrapper.querySelector(".error-message");
      if (errorMessage) errorMessage.remove();

      if (hasError) {
        input.classList.add("border", "border-danger");
        const errorMessage = document.createElement("p");

        errorMessage.classList.add("error-message", "ps-1", "text-danger");
        if (message) errorMessage.textContent = message;

        wrapper.appendChild(errorMessage);

        return;
      }

      options?.onSuccess(input.value);
    };

    arrowButton.addEventListener("click", handleButtonClick);

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        handleButtonClick();
      }
    });

    return wrapper;
  }
}
