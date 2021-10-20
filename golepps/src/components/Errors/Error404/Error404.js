import React from 'react';
import { ErrCard } from '../styles';
import { H1Klob, P1Klob } from '../../Atoms/Typography/Typography';
import { Link } from 'react-router-dom';
import Button from '../../Atoms/Button/Button';

function Error404() {
	return (
		<ErrCard.Wrapper className="d-flex flex-column  align-items-center ">
			<ErrCard.Img className="d-flex my-8">
				<img
					src="https://admin.klob.id/asset_v3/assets/img/404.svg"
					alt="error404"
					width="100%"
					height="100%"
				/>
			</ErrCard.Img>
			<ErrCard.Title className="d-flex justify-content-center w-full">
				<H1Klob darkSlateBlue className="text-center">
					Page not found
				</H1Klob>
			</ErrCard.Title>
			<div className="d-flex text-center my-4">
				<P1Klob battleShipGrey>
					This page is deprecated, deleted, or does not exist at all
				</P1Klob>
			</div>
			<Link to="/">
				<Button green extrawidth>
					Go Back
				</Button>
			</Link>
		</ErrCard.Wrapper>
	);
}

export default Error404;
