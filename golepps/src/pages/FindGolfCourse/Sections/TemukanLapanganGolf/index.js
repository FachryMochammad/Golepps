import React from 'react';
import { Wrapper } from './styles';
import SearchBar from './SearchBar/SearchBar';
import { BigTitle } from '../../../../components/Atoms/Typography/Typography';
import CardGolfCourse from '../../../../components/CardGolfCourse';
import LoaderGolepps from '../../../../components/Loader/LoaderGolepps';
import ErrorNoData from '../../../../components/Errors/ErrorNoData/ErrorNoData';

function TemukanLapanganFavorit({ listGolfCourse, loadingSearch }) {
	return (
		<Wrapper>
			<BigTitle findGolfCourse>CARI LAPANGAN</BigTitle>
			<SearchBar />
			<div className="row">
				{loadingSearch ? (
					<div className="p-5">
						<LoaderGolepps />
					</div>
				) : listGolfCourse && listGolfCourse.length > 0 ? (
					listGolfCourse.map((golfCourse) => (
						<CardGolfCourse golfCourse={golfCourse} key={golfCourse.name} />
					))
				) : (
					<div className="p-3">
						<ErrorNoData />
					</div>
				)}
			</div>
		</Wrapper>
	);
}

export default TemukanLapanganFavorit;
