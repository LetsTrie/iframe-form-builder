import { loadFormFields } from "../api";
import { dom } from "../helpers/dom";

let isIframeVisible = false;

export const toggleIframeVisibility = async () => {
  if (!isIframeVisible) {
    dom.loader.style.display = "block";
    const data = await loadFormFields();
    dom.loader.style.display = "none";

    const message = JSON.stringify({ data });
    dom.iframe.contentWindow?.postMessage(message, "*");
  } else {
    dom.formData.innerHTML = "";
  }

  const buttonText = !isIframeVisible ? "Hide Form" : "Open Form";
  const iframeDisplay = !isIframeVisible ? "block" : "none";

  dom.iframeContainer.style.display = iframeDisplay;
  dom.toggleFormButton.textContent = buttonText;

  isIframeVisible = !isIframeVisible;
};
