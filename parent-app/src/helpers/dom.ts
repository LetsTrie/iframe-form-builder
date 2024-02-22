import { DomElements } from "../models";

export const dom: DomElements = {
  toggleFormButton: document.getElementById(
    "toggle-form-btn"
  ) as HTMLButtonElement,

  iframeContainer: document.getElementById(
    "child-iframe-container"
  ) as HTMLDivElement,

  iframe: document.getElementById("child-iframe") as HTMLIFrameElement,
  loader: document.getElementById("loader") as HTMLDivElement,

  formData: document.getElementById("form-data") as HTMLDivElement,
};
