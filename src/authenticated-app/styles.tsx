import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial;
`;

export const StyledScroll = styled(PerfectScrollbar)`
  height: 92vh;
`;
