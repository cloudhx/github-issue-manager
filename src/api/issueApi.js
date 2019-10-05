import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/issues";
const baseUrl = "https://api.github.com/issues";

export function getIssues() {
  return fetch(baseUrl, {
    headers: { Authorization: "token 0c37d7fc88f9ee87d4c9b0200ef73dc5cbcbc5a6" }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function editIssue(issue) {
  return fetch(issue.url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: "token 0c37d7fc88f9ee87d4c9b0200ef73dc5cbcbc5a6"
    },
    body: JSON.stringify(issue)
  })
    .then(handleResponse)
    .catch(handleError);
}
