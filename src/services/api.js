const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export function buildApiUrl(path) {
  return `${API_URL}${path}`;
}

export default API_URL;
