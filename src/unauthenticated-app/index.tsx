import React, { useState, useContext } from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { Context } from "../context";
import logosrc from "./logo.png";
import { Wrapper } from "./styles";
import { useGetCodeFromUrl } from "../hooks/useGetCodeFromUrl";
import { Redirect } from "react-router";

const UnauthenticatedApp = () => {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  useGetCodeFromUrl(setData, data, dispatch, state);

  if (state.isLoggedIn === true) return <Redirect to="/" />;

  return (
    <Wrapper>
      <section className="container">
        <div>
          <img alt="logo" src={logosrc} />
          <span>{data.errorMessage}</span>
          <a
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_OAUTH_REDIRECT_URI_DEV}`}
            onClick={() => {
              setData({ ...data, errorMessage: "" });
            }}
            className="login-container"
          >
            {data.isLoading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <span className="login-link">
                <GithubIcon />
                <span>Login</span>
              </span>
            )}
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

export default UnauthenticatedApp;
