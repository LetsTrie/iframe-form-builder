import { toggleIframeVisibility } from ".";
import { dom } from "../helpers/dom";

export function initializeEventListeners() {
  dom.formData.innerHTML = "";
  dom.toggleFormButton.addEventListener("click", toggleIframeVisibility);
}
