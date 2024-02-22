import { DomElements } from "../models";

export const dom: DomElements = {
  submitButton: document.getElementById("submit-button") as HTMLButtonElement,
  appContainer: document.getElementById("child-app") as HTMLDivElement,
};
