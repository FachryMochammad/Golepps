import React from "react";
import { ErrCard } from "../styles";
import { H1Klob, P1Klob } from "components/Atoms/Typography/Typography";

function ErrorNoData({ customText, customTitle }) {
  return (
    <ErrCard.Wrapper className="d-flex flex-column align-items-center ">
      <ErrCard.Img className="d-flex my-8">
        <img
          src="https://static.klob.id/image_bank/corporate/ic_not+found.svg"
          alt="not-found"
          width="100%"
          height="100%"
        />
      </ErrCard.Img>
      <ErrCard.Title className="d-flex justify-content-center w-full">
        <H1Klob darkSlateBlue className="text-center">
          {customTitle ? customTitle : "Data tidak ditemukan"}
        </H1Klob>
      </ErrCard.Title>
      <div className="d-flex text-center my-4">
        <P1Klob battleShipGrey>
          {customText
            ? customText
            : "Maaf kami tidak menemukan talenta yang kamu cari."}
        </P1Klob>
      </div>
    </ErrCard.Wrapper>
  );
}

export default ErrorNoData;
