import { API_URL } from "../utils/constants.js";

export async function getSupporters() {
  const res = await fetch(`${API_URL}/supporters`, {});
  if (!res.ok) throw Error("Failed getting Supporters List");
  return res.json();
}