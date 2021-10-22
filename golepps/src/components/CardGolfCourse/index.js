import React from 'react';
import { P4Klob } from '../Atoms/Typography/Typography';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './styles';
// import MockImage from '../../assets/images/modern-golf-preview.png';
// import { addToFavorites } from '../store/actions/favorites';
// import { useDispatch, useSelector } from 'react-redux';

const CardGolfCourse = ({ golfCourse }) => {
	const history = useHistory();
	// const dispatch = useDispatch();
	// const favorites = useSelector((state) => state.favorites.data);
	const toGolfCourseDetail = (event, courseId, courseName) => {
		event.preventDefault();
		history.push(
			`/find-golf-course/detail/${courseId}?courseName=${courseName}`
		);
	};

	return (
		<Wrapper className="col-md-4 col-sm-1 col-lg-4 mt-3">
			<div className="card">
				<img
					src={golfCourse.image_2}
					className="card-image"
					alt={golfCourse.name}
					onClick={(event) => {
						const courseId = golfCourse.id;
						const courseName = golfCourse.name;
						toGolfCourseDetail(event, courseId, courseName);
					}}
				/>
				<div className="card-body">
					<P4Klob
						className="course-name"
						onClick={(event) => {
							const courseId = golfCourse.id;
							const courseName = golfCourse.name;
							toGolfCourseDetail(event, courseId, courseName);
						}}
					>
						{golfCourse.name}
					</P4Klob>
					<p
						style={{ fontSize: '10px', marginTop: '10px' }}
						className="course-city"
					>
						{golfCourse.city}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default CardGolfCourse;
