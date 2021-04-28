export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") || "false"),
  serverdata: JSON.parse(localStorage.getItem("serverdata") || "null"),
  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  redirect_uri:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI_DEV
      : process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI,
  client_secret: process.env.REACT_APP_GITHUB_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
};
