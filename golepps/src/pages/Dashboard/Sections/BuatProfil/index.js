import React from 'react';
import {
	BigTitle,
	P1Klob,
} from '../../../../components/Atoms/Typography/Typography';
import { Wrapper, TitleDiv, PhotoDiv, DownloadDiv } from './styles';
import buatProfil from '../../../../assets/images/buat-profil.png';
import appstore from '../../../../assets/images/appstore-footer.png';
import googlestore from '../../../../assets/images/googlestore-footer.png';

function BuatProfil() {
	return (
		<Wrapper>
			<PhotoDiv>
				<img src={buatProfil} alt="buatProfil" width="100%" height="100%" />
			</PhotoDiv>
			<TitleDiv>
				<BigTitle darkGreen>
					BUAT PROFIL DAN KEMBANGKAN KOMUNITAS GOLFMU.
				</BigTitle>
				<P1Klob className="mt-4">
					Bagikan momen-momen golfmu bersama teman dan bangun komunitas golfmu
					secara digital!
				</P1Klob>
			</TitleDiv>
			<DownloadDiv>
				<BigTitle darkGreen download className="mb-2">
					UNTUK MENGGUNAKAN SELURUH FITUR, DOWNLOAD SEKARANG
				</BigTitle>
				<div>
					<img src={appstore} alt="appstore" className="appstore me-2" />
					<img src={googlestore} alt="googlestore" />
				</div>
			</DownloadDiv>
		</Wrapper>
	);
}

export default BuatProfil;
