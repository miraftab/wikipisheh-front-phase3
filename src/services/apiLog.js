import { API_URL } from "../utils/constants.js";

export async function sendFrontendLog(log, level = "info") {
  try {
    await fetch(`${API_URL}/frontend-log/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({log, level}),
    });
  } catch (error) {
    console.error("Failed to send log:", error);
  }
}