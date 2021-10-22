import React from 'react';
import { Container } from './styles';

function LoaderGlobal() {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<div className="lds-eclipse">
				<div className="spinner" />
				<img
					src="https://static.klob.id/img/klob_logo_white.png"
					alt="golepps"
				/>
			</div>
		</Container>
	);
}

export default LoaderGlobal;
