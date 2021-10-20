import React from "react";
import { ErrCard } from "../styles";
import { H1Klob } from "components/Atoms/Typography/Typography";

function Error500() {
  return (
    <ErrCard.Wrapper className="d-flex flex-column align-items-center my-16">
      <ErrCard.Img className="d-flex my-8">
        <img
          src="https://static.klob.id/image_bank/chatting/disconnecting.svg"
          // src="https://static.klob.id/image_bank/corporate/ic_error+(1).svg"
          alt="error500"
          width="100%"
          height="100%"
        />
      </ErrCard.Img>
      <ErrCard.Title className="d-flex justify-content-center w-full">
        <H1Klob darkSlateBlue className="text-center">
          Maaf, terjadi kesalahan. Coba ulangi beberapa saat lagi
        </H1Klob>
      </ErrCard.Title>
    </ErrCard.Wrapper>
  );
}

export default Error500;
