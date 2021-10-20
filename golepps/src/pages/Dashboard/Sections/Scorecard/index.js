import React from 'react';
import {
	BigTitle,
	P1Klob,
} from '../../../../components/Atoms/Typography/Typography';
import { Wrapper, TitleDiv, PhotoDiv } from './styles';
import scorecard from '../../../../assets/images/scorecard.png';

function Scorecard() {
	return (
		<Wrapper>
			<TitleDiv>
				<BigTitle darkGreen>BAGIKAN SKOR GOLFMU SECARA DIGITAL.</BigTitle>
				<P1Klob className="mt-4">
					Catat skor golfmu setiap kali main dan bagikan ke teman-teman!
				</P1Klob>
			</TitleDiv>
			<PhotoDiv>
				<img src={scorecard} alt="scorecard" width="100%" height="100%" />
			</PhotoDiv>
		</Wrapper>
	);
}

export default Scorecard;
