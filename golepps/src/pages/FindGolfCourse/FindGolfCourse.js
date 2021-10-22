import React, { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAction } from '../../services/axios/actions';
import { pathListGolfCourse } from '../../services/axios/endpoints';

const Layout = lazy(() => import('../../layouts/Layout'));
const Title = lazy(() => import('./Sections/Title'));
const TemukanLapanganGolf = lazy(() =>
	import('./Sections/TemukanLapanganGolf')
);

function FindGolfCourse() {
	const { listGolfCourse, loadingSearch } = useSelector(
		(state) => state.golfCourse
	);
	const [error, setError] = useState(false);

	const dispatch = useDispatch();

	// fetching data
	useEffect(() => {
		let mounted = true;

		if (mounted) {
			getAction({ url: pathListGolfCourse })
				.then(({ data }) => {
					dispatch({ type: 'SET_LIST_GOLF_COURSE', data: data });
					setError(false);
				})
				.catch((err) => {
					console.log(err);
					setError(true);
				});
		}
		// memberikan efek scroll to top ketika masuk ke page ini
		window.scrollTo({ top: 0, behavior: 'smooth' });

		return function cleanup() {
			mounted = false;
		};
		// eslint-disable-next-line
	}, []);

	return (
		<Layout>
			{!error && (
				<>
					<Title />
					<TemukanLapanganGolf
						loadingSearch={loadingSearch}
						listGolfCourse={listGolfCourse}
					/>
				</>
			)}
		</Layout>
	);
}

export default FindGolfCourse;
