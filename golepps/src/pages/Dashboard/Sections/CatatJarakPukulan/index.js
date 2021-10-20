import React from 'react';
import {
	BigTitle,
	P1Klob,
} from '../../../../components/Atoms/Typography/Typography';
import { Wrapper, TitleDiv, PhotoDiv } from './styles';
import stickMeasure from '../../../../assets/images/stick-measure.png';

function CatatJarakPukulan() {
	return (
		<Wrapper>
			<PhotoDiv>
				<img src={stickMeasure} alt="stickMeasure" width="100%" height="100%" />
			</PhotoDiv>
			<TitleDiv>
				<BigTitle darkGreen>CATAT DAN SIMPAN JARAK PUKULANMU.</BigTitle>
				<P1Klob className="mt-4">
					Golepps membantu kamu mencatat setiap jarak dari stick golfmu.
				</P1Klob>
			</TitleDiv>
		</Wrapper>
	);
}

export default CatatJarakPukulan;
