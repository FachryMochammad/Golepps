import React from 'react';
import {
	BigTitle,
	P1Klob,
} from '../../../../components/Atoms/Typography/Typography';
import { Wrapper, TitleDiv } from './styles';

function Title() {
	return (
		<Wrapper>
			<TitleDiv>
				<BigTitle darkGreen>TEMUKAN LAPANGAN FAVORITMU!</BigTitle>
				<P1Klob className="mt-4">
					Rencanakan main golfmu dengan mudah! Cari dan hubungi lapangan
					favortimu disini!
				</P1Klob>
			</TitleDiv>
		</Wrapper>
	);
}

export default Title;
