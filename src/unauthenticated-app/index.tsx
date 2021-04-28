import { useState, useContext } from "react";
import { Context } from "../context";
import logosrc from "./logo.png";
import { Wrapper, LoginContainer } from "./styles";
import { useGetCodeFromUrl } from "../hooks/useGetCodeFromUrl";
import { Redirect } from "react-router";
import { LoginButton } from "./LoginButton";
import { OauthUrl } from "./OauthUrl";

const UnauthenticatedApp = () => {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  useGetCodeFromUrl(setData, data, dispatch, state);

  if (state.isLoggedIn === true) return <Redirect to="/" />;

  return (
    <Wrapper>
      <section>
        <div>
          <img alt="logo" src={logosrc} />
          <span>{data.errorMessage}</span>
          <LoginContainer
            href={OauthUrl}
            onClick={() => {
              setData({ ...data, errorMessage: "" });
            }}
          >
            <LoginButton loading={data.isLoading} />
          </LoginContainer>
        </div>
      </section>
    </Wrapper>
  );
};

export default UnauthenticatedApp;
