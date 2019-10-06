export function handleResponse(response) {
  if (response.ok) return response.json();

  if (response.status === 401) {
    // 401 Unauthorized, bad credentials
    // GitHub API requires a valid token to access protected resources.
    throw new Error("Invalid personal access token.");
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
