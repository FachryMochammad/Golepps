import React from 'react';
import {
	BigTitle,
	P1Klob,
} from '../../../../components/Atoms/Typography/Typography';
import { Wrapper, TitleDiv } from './styles';
import appstore from '../../../../assets/images/appstore-footer.png';
import googlestore from '../../../../assets/images/googlestore-footer.png';

function Title() {
	return (
		<Wrapper>
			<TitleDiv>
				<BigTitle>SATU APLIKASI UNTUK SELURUH KEPERLUAN GOLFMU.</BigTitle>
				<P1Klob className="mt-4 mb-4">
					Mulai dari cari dan booking lapangan favorit hingga bangun komunitas
					golfmu secara online!
				</P1Klob>
				<div>
					<img src={appstore} alt="appstore" className="appstore me-2" />
					<img src={googlestore} alt="googlestore" />
				</div>
			</TitleDiv>
		</Wrapper>
	);
}

export default Title;
