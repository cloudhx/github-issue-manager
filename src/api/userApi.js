import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.API_URL + "/issues";
const baseUrl = "https://api.github.com/user";

export function getUser(token) {
  return fetch(baseUrl, {
    headers: { Authorization: `token ${token}` }
  })
    .then(handleResponse)
    .catch(handleError);
}
