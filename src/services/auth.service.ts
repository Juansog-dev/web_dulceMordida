import { CONFIG } from "../config";

export const loginService = async (correotelefono: string, clave: string) => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.LOGIN}`;
  const formData = new FormData();
  formData.append("correotelefono", correotelefono);
  formData.append("clave", clave);
  const response = await fetch(API_URL, { body: formData, method: "POST" });

  if (!response.ok) {
    throw new Error(
      "Error en el servido :${response.status} ${response.statusText}",
    );
  }
  return response.json();
};
