import React from "react";
import styled from "styled-components";

export const LoadingButton = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  > div {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation: spin 2s linear infinite;
  }
`;
