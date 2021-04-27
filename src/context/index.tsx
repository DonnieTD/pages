import { createContext, useReducer } from "react";

export const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") || "false"),
  serverdata: JSON.parse(localStorage.getItem("serverdata") || "null"),
  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI_DEV,
  client_secret: process.env.REACT_APP_GITHUB_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
};

export const Context = createContext({
  state: {
    isLoggedIn: false,
    serverdata: null,
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI_DEV,
    client_secret: process.env.REACT_APP_GITHUB_SECRET,
    proxy_url: process.env.REACT_APP_PROXY_URL,
  },
  dispatch: (value: any) => {},
});

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN": {
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem(
        "serverdata",
        JSON.stringify(action.payload.serverdata)
      );
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        serverdata: action.payload.serverdata,
      };
    }
    case "LOGOUT": {
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        serverdata: null,
      };
    }
    default:
      return state;
  }
};

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
