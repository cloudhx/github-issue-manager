import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/issues";
const baseUrl = "https://api.github.com/issues";

export function getIssues(token) {
  return fetch(baseUrl, {
    headers: { Authorization: `token ${token}` }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function editIssue(issue, token) {
  return fetch(issue.url, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `token ${token}`
    },
    body: JSON.stringify(issue)
  })
    .then(handleResponse)
    .catch(handleError);
}
