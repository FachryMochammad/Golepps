import React from 'react';
import { ErrCard, Wrapper } from '../styles';
import { H1Klob, P1Klob } from '../../Atoms/Typography/Typography';

function ErrorLostConnection({ isOffline }) {
	return (
		<div className="d-flex flex-column align-items-center ">
			<Wrapper
				isOffline={isOffline}
				className="d-flex flex-column align-items-center"
			>
				<ErrCard.Img className="d-flex justify-content-center my-4 w-full">
					<img
						src="https://static.klob.id/image_bank/chatting/disconnecting.svg"
						alt="lost connection"
						width="100%"
						height="100%"
					/>
				</ErrCard.Img>
				<ErrCard.Title className="d-flex justify-content-center w-full flex-column">
					<div className="my-4">
						<H1Klob darkSlateBlue className="text-center">
							Koneksi internet kamu terganggu!
						</H1Klob>
					</div>
					<P1Klob battleShipGrey className="text-center">
						Yuk, pastikan internet kamu lancar dengan cek ulang paket data,
						WiFi, atau jaringan di tempat kamu.
					</P1Klob>
				</ErrCard.Title>
			</Wrapper>
		</div>
	);
}

export default ErrorLostConnection;
