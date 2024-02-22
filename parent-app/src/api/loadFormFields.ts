import { constants, endpoints } from "../constants";

export const loadFormFields = async () => {
  const response = await fetch(endpoints.getFormFields(constants.FORM_ID));
  if (!response.ok) throw new Error("Failed to Fetch");
  const data = response.json();
  return data;
};
