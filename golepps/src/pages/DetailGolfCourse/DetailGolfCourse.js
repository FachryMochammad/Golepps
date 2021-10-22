import React, { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getAction } from '../../services/axios/actions';
import { pathDetailGolfCourse } from '../../services/axios/endpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faMapMarkedAlt,
	faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
	Wrapper,
	PhotoDiv,
	DescriptionDiv,
	LeftWrapper,
	RightWrapper,
	DetailedSection,
} from './styles';
// import golfCoursePhoto from '../../assets/images/modern-golf-detail.png';
import {
	BigTitle,
	H3Klob,
	P3Klob,
	P2Klob,
} from '../../components/Atoms/Typography/Typography';
import Loader from '../../components/Loader/Loader';

const Layout = lazy(() => import('../../layouts/Layout'));
// const Title = lazy(() => import('./Sections/Title'));
// const TemukanLapanganGolf = lazy(() =>
// 	import('./Sections/TemukanLapanganGolf')
// );

function FindGolfCourse() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { detailGolfCourse } = useSelector((state) => state.golfCourse);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// fetching data
	useEffect(() => {
		let mounted = true;

		if (mounted) {
			if (!detailGolfCourse || detailGolfCourse.id !== id) {
				setLoading(true);
				getAction({ url: pathDetailGolfCourse + id })
					.then(({ data }) => {
						dispatch({ type: 'SET_DETAIL_GOLF_COURSE', data: false });
						dispatch({ type: 'SET_DETAIL_GOLF_COURSE', data: data });
						setLoading(false);
						setError(false);
					})
					.catch((err) => {
						console.log(err);
						setError(true);
					});
			}
		}
		// memberikan efek scroll to top ketika masuk ke page ini
		window.scrollTo({ top: 0, behavior: 'smooth' });

		return function cleanup() {
			mounted = false;
		};
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Loader />;
	} else {
		return (
			<Layout>
				<Wrapper>
					{!error && (
						<>
							<PhotoDiv>
								<img
									src={detailGolfCourse.image_3}
									alt="golfCourse"
									width="100%"
									height="100%"
								/>
							</PhotoDiv>
							<DetailedSection>
								<BigTitle findGolfCourse>{detailGolfCourse.name}</BigTitle>
								<H3Klob className="mt-2">{detailGolfCourse.city}</H3Klob>
								<DescriptionDiv>
									<LeftWrapper>
										<P3Klob style={{ color: '#707070' }}>Info</P3Klob>
										<P2Klob className="mt-2">{detailGolfCourse.info_2}</P2Klob>
									</LeftWrapper>
									<RightWrapper>
										<P3Klob gray>Telepon</P3Klob>
										<P2Klob className="mt-2">
											<FontAwesomeIcon
												color="#dc143c"
												className="me-2"
												icon={faPhone}
											/>
											{detailGolfCourse.phone_number}
										</P2Klob>
										<P3Klob gray className="mt-4">
											Email
										</P3Klob>
										<P2Klob className="mt-2">
											<FontAwesomeIcon
												color="#6fc8fb"
												className=" me-2"
												icon={faEnvelopeSquare}
											/>
											{detailGolfCourse.email}
										</P2Klob>
										<P3Klob gray className="mt-4">
											Petunjuk
										</P3Klob>
										<P2Klob className="mt-2">
											<FontAwesomeIcon
												color="green"
												className="me-2"
												icon={faMapMarkedAlt}
											/>
											{detailGolfCourse.address}
										</P2Klob>
									</RightWrapper>
								</DescriptionDiv>
							</DetailedSection>
						</>
					)}
				</Wrapper>
			</Layout>
		);
	}
}

export default FindGolfCourse;
