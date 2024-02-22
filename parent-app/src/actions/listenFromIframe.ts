import { dom } from "../helpers/dom";

export const listenFromIframe = () => {
  window.addEventListener("message", function (e) {
    if (e.origin === "http://localhost:5174" && e.data) {
      dom.formData.innerHTML = `
      <div>
        <div class="alert alert-success" role="alert">
          Form submitted successfully!
        </div>
        <pre><code>${JSON.stringify(e.data, null, 4)}</code></pre>
      </div>`;
    }
  });
};
