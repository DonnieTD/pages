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
