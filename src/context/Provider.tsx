import { useReducer } from "react";
import { Context } from ".";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

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
