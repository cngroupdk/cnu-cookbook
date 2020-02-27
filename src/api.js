import { create } from "apisauce";

const API_BASE_URL = "https://cookbook.jakubricar.cz/api/";

export const api = create({
  baseURL: API_BASE_URL,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache"
  }
});
