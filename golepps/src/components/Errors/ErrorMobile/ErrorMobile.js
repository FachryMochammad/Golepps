import React from "react";
import { ErrCard } from "../styles";
import { H1Klob, P1Klob } from "components/Atoms/Typography/Typography";

function ErrorNoAccess() {
  return (
    <ErrCard.Wrapper className="d-flex flex-column align-items-center klob-max klob-dashboard justify-content-center">
      <ErrCard.Img className="d-flex my-8">
        <img
          src="https://static.klob.id/image_bank/corporate/ic_handphone+(1).svg"
          alt="no-mobile-view"
          width="100%"
          height="100%"
        />
      </ErrCard.Img>
      <ErrCard.Title className="d-flex justify-content-center w-full">
        <H1Klob darkSlateBlue className="text-center">
          Tidak dapat akses melalui Handphone
        </H1Klob>
      </ErrCard.Title>
      <div className="d-flex text-center my-4">
        <P1Klob battleShipGrey>
          Untuk fungsi yang maksimal, halaman ini hanya bisa di akses melalui
          browser PC. Terima kasih.
        </P1Klob>
      </div>
    </ErrCard.Wrapper>
  );
}

export default ErrorNoAccess;
