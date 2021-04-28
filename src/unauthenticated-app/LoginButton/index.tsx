import React from "react";
import GithubIcon from "mdi-react/GithubIcon";
import { LoadingButton } from "./LoadingButton";
import styled from "styled-components";

export const LoginButton: React.FC<{ loading: boolean }> = ({ loading }) => {
  return loading ? (
    <LoadingButton />
  ) : (
    <Wrapper>
      <GithubIcon />
      <span>Login</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
  color: #fff;
  text-transform: uppercase;
  cursor: default;
  display: flex;
  align-items: center;
  height: 40px;
  > span:nth-child(2) {
    margin-left: 5px;
  }
`;
