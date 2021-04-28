import ClipLoader from "react-spinners/ClipLoader";
import { Wrapper } from "../unauthenticated-app/styles";

export const Fallback = () => {
  return (
    <Wrapper>
      <ClipLoader size={200} color="white" />
    </Wrapper>
  );
};
