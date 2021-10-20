import React from "react";
import { Wrapper } from "./styles";

// import "./index.scss";

function LoaderKlob({ absolutePosition, customHeight, bg }) {
  return (
    <Wrapper customHeight={customHeight} bg={bg}>
      <div className="lds-eclipse">
        <div className="spinner" />
        <img src="https://static.klob.id/img/klob_logo_white.png" alt="klob" />
      </div>
    </Wrapper>
  );
}

LoaderKlob.defaultProps = {
  absolutePosition: true,
};

export default LoaderKlob;
