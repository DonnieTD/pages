import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const Fallback = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "#222a31",
      }}
    >
      <ClipLoader size={200} color="white" />
    </div>
  );
};
