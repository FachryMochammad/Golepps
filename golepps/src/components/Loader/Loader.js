import React from 'react';
import { Container } from './styles';
import golepps from '../../assets/images/golepps-vertical-1.png';

function Loader() {
	return (
		<Container
			className="d-flex justify-content-center align-items-center klob-dashboard"
			white
		>
			<div className="lds-eclipse">
				<div className="spinner" />
				<img src={golepps} alt="golepps" />
			</div>

			{/* <img
        src="https://static.klob.id/image_bank/intelligo/loader-intelligo.gif"
        alt="loader"
      /> */}
		</Container>
	);
}

export default Loader;
