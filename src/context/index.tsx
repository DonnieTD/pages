import { createContext } from "react";

export const Context = createContext({
  state: {
    isLoggedIn: false,
    serverdata: null,
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    redirect_uri:
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI_DEV
        : process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI,
    client_secret: process.env.REACT_APP_GITHUB_SECRET,
    proxy_url: process.env.REACT_APP_PROXY_URL,
  },
  dispatch: (value: any) => {},
});

export { Provider } from "./Provider";
