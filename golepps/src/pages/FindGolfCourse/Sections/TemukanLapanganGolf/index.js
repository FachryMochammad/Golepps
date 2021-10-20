import React from 'react';
import { BigTitle } from '../../../../components/Atoms/Typography/Typography';
import CardGolfCourse from '../../../../components/CardGolfCourse';
import { Wrapper } from './styles';

function TemukanLapanganFavorit({ listGolfCourse }) {
	return (
		<Wrapper>
			<BigTitle findGolfCourse>CARI LAPANGAN</BigTitle>
			<h5 className="mt-3 mb-3">Search Box</h5>
			<div className="row">
				{listGolfCourse &&
					listGolfCourse.map((golfCourse) => (
						<CardGolfCourse golfCourse={golfCourse} key={golfCourse.name} />
					))}
			</div>
		</Wrapper>
	);
}

export default TemukanLapanganFavorit;
