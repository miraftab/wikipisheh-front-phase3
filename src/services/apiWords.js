import { API_URL } from "../utils/constants.js";

export async function getWords(searchParams) {
  const res = await fetch(`${API_URL}/words?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      "X-Page-Size": 12
    }
  });
  if (!res.ok) throw Error("Failed getting Words List");
  return res.json();
}

export async function getWord(slug) {
  const res = await fetch(`${API_URL}/words/${slug.wordSlug}`, {});
  if (!res.ok) throw Error("Failed getting Word");
  return res.json();
}

export async function getSuggestedCount(searchParams) {
  const res = await fetch(`${API_URL}/words/suggested?${searchParams.toString()}`, {});
  if (!res.ok) throw Error("Failed getting Suggested Count");
  return res.json();
}

export async function getAdvancedSearchParams() {
  const res = await fetch(`${API_URL}/words/adv_search`, {});
  if (!res.ok) throw Error("Failed getting Advanced Search Parameters");
  return res.json();
}

export async function postContactUs(formData, accessToken) {
  const res = await fetch(`${API_URL}/contactus/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw Error("Failed posting contact us form");
  return res.json();
}

export async function postSuggestedWord(formData, accessToken) {
  const res = await fetch(`${API_URL}/words/suggestword/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw Error("Failed posting suggested word form");
  return res.json();
}