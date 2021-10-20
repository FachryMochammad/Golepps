import React from "react";
import { Container } from "./styles";

function Loader() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center klob-dashboard"
      white
    >
      <div className="lds-eclipse">
        <div className="spinner" />
        <img src="https://static.klob.id/img/klob_logo_white.png" alt="klob" />
      </div>

      {/* <img
        src="https://static.klob.id/image_bank/intelligo/loader-intelligo.gif"
        alt="loader"
      /> */}
    </Container>
  );
}

export default Loader;
