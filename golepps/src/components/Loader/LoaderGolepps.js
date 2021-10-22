import React from 'react';
import { Wrapper } from './styles';
import golepps from '../../assets/images/golepps-vertical-1.png';

function LoaderGolepps({ customHeight, bg }) {
	return (
		<Wrapper customHeight={customHeight} bg={bg}>
			<div className="lds-eclipse">
				<div className="spinner" />
				<img src={golepps} alt="golepps" />
			</div>
		</Wrapper>
	);
}

LoaderGolepps.defaultProps = {
	absolutePosition: true,
};

export default LoaderGolepps;
