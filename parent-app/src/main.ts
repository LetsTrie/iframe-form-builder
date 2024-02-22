import { initializeEventListeners, listenFromIframe } from "./actions";

document.addEventListener("DOMContentLoaded", async () => {
  initializeEventListeners();
  listenFromIframe();
});
