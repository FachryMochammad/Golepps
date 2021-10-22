import React from 'react';
import { ErrCard } from '../styles';
import { H2Klob, P2Klob } from '../../Atoms/Typography/Typography';

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
				<H2Klob darkSlateBlue className="text-center mt-1">
					{customTitle ? customTitle : 'Data tidak ditemukan'}
				</H2Klob>
			</ErrCard.Title>
			<div className="d-flex text-center my-3">
				<P2Klob battleShipGrey>
					{customText
						? customText
						: 'Maaf kami tidak menemukan lapangan atau lokasi yang kamu cari.'}
				</P2Klob>
			</div>
		</ErrCard.Wrapper>
	);
}

export default ErrorNoData;
