import React from 'react';
import { P4Klob } from '../Atoms/Typography/Typography';
// import { useHistory } from 'react-router-dom';
import { Wrapper } from './styles';
import MockImage from '../../assets/images/modern-golf-preview.png';
// import { addToFavorites } from '../store/actions/favorites';
// import { useDispatch, useSelector } from 'react-redux';

const CardGolfCourse = ({ golfCourse }) => {
	// const history = useHistory();
	// const dispatch = useDispatch();
	// const favorites = useSelector((state) => state.favorites.data);
	// const toGameDetail = (event, id) => {
	// 	event.preventDefault();
	// 	history.push(`/games/${id}`);
	// };
	// const addToFavorite = ({ title, genre, id, thumbnail }) => {
	// 	const isFound = favorites.find((favorite) => favorite.title === title);
	// 	if (!isFound) {
	// 		toast.success(`Added ${title} to your favorite games!`, {
	// 			autoClose: 3000,
	// 			position: toast.POSITION.TOP_CENTER,
	// 		});
	// 		dispatch(addToFavorites({ title, genre, id, thumbnail }));
	// 	} else {
	// 		toast.error(`${title} is already in your favorite games!`, {
	// 			autoClose: 3000,
	// 			position: toast.POSITION.TOP_CENTER,
	// 		});
	// 	}
	// };

	return (
		<Wrapper className="col-md-4 col-sm-1 col-lg-4 mt-3">
			<div className="card" style={{ border: 'none' }}>
				<img
					src={MockImage}
					className="card-image"
					alt={golfCourse.name}
					// onClick={(event) => {
					// 	const id = golfCourse.id;
					// 	toGameDetail(event, id);
					// }}
				/>
				<div className="card-body">
					<P4Klob
						className="game-title"
						// onClick={(event) => {
						// 	const id = golfCourse.id;
						// 	toGameDetail(event, id);
						// }}
					>
						{golfCourse.name}
					</P4Klob>
					<p
						style={{ fontSize: '10px', marginTop: '10px' }}
						className="game-desc"
					>
						{golfCourse.city}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default CardGolfCourse;
