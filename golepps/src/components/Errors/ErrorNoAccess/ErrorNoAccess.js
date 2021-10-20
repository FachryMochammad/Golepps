import React from "react";
import { ErrCard } from "../styles";
import { H1Klob, P1Klob } from "components/Atoms/Typography/Typography";

function ErrorNoAccess() {
  return (
    <ErrCard.Wrapper className="d-flex flex-column align-items-center klob-max py-4 justify-content-center">
      <ErrCard.Img className="d-flex my-8">
        <img
          src="https://static.klob.id/image_bank/corporate/ic_no+access.svg"
          alt="not-access"
          width="100%"
          height="100%"
        />
      </ErrCard.Img>
      <ErrCard.Title className="d-flex justify-content-center w-full">
        <H1Klob darkSlateBlue className="text-center">
          Tidak memiliki akses
        </H1Klob>
      </ErrCard.Title>
      <div className="d-flex text-center my-4">
        <P1Klob battleShipGrey>
          Maaf kamu tidak bisa mengakses fitur ini, silahkan hubungi
          administrator untuk mengaktifkannya.
        </P1Klob>
      </div>
    </ErrCard.Wrapper>
  );
}

export default ErrorNoAccess;
