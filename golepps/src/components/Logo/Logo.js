import React from "react";
import { Wrapper, LogoBox } from "./styles";
// import { H4Klob } from "components/Atoms/Typography/Typography";

function Logo() {
  return (
    <Wrapper>
      {/* <H4Klob className="font-italic" primary>
        Hiring Portal
      </H4Klob> */}
      <LogoBox>
        LOGO
        {/* <img
          src="https://static.klob.id/image_bank/intelligo/Intelligo+by+Klob-08.svg"
          alt="intelligo"
          width="100%"
          height="100%"
        /> */}
      </LogoBox>
      {/* <LogoTitle>Intelligo</LogoTitle> */}
    </Wrapper>
  );
}

export default Logo;
