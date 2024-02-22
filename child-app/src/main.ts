import { dom } from "./helpers/dom";
import { createFieldRenderer } from "./helpers/fileRenderers";
import { FormData } from "./models/FormData";

window.addEventListener("message", function (e) {
  if (!e.data) return;

  const formFields = JSON.parse(e.data);
  const fields = (formFields.data as FormData)?.fields;
  if (!(fields && fields.length > 0)) return;

  const { appContainer } = dom;
  if (!appContainer) return;
  appContainer.innerHTML = "";

  const formData: Record<string, string | boolean> = {};

  const formContainer = document.createElement("form");

  const showCurrentField = (currentFieldIndex: number = 0) => {
    formContainer.innerHTML = "";

    if (currentFieldIndex === fields.length) {
      formContainer.dispatchEvent(new Event("submit"));
      return;
    }

    const fieldRenderer = createFieldRenderer(fields[currentFieldIndex]);

    formContainer.appendChild(
      fieldRenderer.render({
        onSuccess: (value) => {
          formData[fields[currentFieldIndex].name] = value;
          showCurrentField(currentFieldIndex + 1);
        },
      })
    );
  };

  showCurrentField();

  formContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    window.top?.postMessage(formData, "*");
    appContainer.innerHTML = "";

    const thankYouHeading = document.createElement("h1");
    thankYouHeading.textContent = "THANK YOU!";
    thankYouHeading.classList.add("pt-3", "text-center", "text-success");
    appContainer.appendChild(thankYouHeading);
  });

  appContainer.appendChild(formContainer);
});
