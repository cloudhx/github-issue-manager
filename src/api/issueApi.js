import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/issues";
const baseUrl = "https://api.github.com/issues";

export function getIssues() {
  return fetch(baseUrl, {
    headers: { Authorization: "token b26c50611eb03544054dd72b0b48295b3dc3c5f7" }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function editIssue(issue) {
  return fetch(issue.url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: "token b26c50611eb03544054dd72b0b48295b3dc3c5f7"
    },
    body: JSON.stringify(issue)
  })
    .then(handleResponse)
    .catch(handleError);
}
