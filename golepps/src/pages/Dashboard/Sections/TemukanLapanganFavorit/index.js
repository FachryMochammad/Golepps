import React from 'react';
import {
	BigTitle,
	P1Klob,
	P3Klob,
} from '../../../../components/Atoms/Typography/Typography';
import { Wrapper, TitleDiv, PhotoDiv } from './styles';
import cariLapangan from '../../../../assets/images/cari-lapangan.png';
import { NavLink } from 'react-router-dom';

function TemukanLapanganFavorit() {
	return (
		<Wrapper>
			<PhotoDiv>
				<img src={cariLapangan} alt="carilapangan" width="100%" height="100%" />
			</PhotoDiv>
			<TitleDiv>
				<BigTitle darkGreen>TEMUKAN LAPANGAN FAVORITMU.</BigTitle>
				<P1Klob className="mt-4 mb-4">
					Rencanakan dimana kamu akan main berikutnya! Temukan informasi lengkap
					lapangan golf didekatmu sekarang!
				</P1Klob>
				<NavLink exact to={`/find-golf-course`}>
					<P3Klob bold darkGreen>
						CARI LAPANGAN {'>'}
					</P3Klob>
				</NavLink>
			</TitleDiv>
		</Wrapper>
	);
}

export default TemukanLapanganFavorit;
