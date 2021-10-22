import React, { lazy } from 'react';
import Error404 from '../../components/Errors/Error404/Error404';

const Layout = lazy(() => import('../../layouts/Layout'));

const Landing = () => {
	return (
		<Layout>
			<div className="klob-max klob-dashboard">
				<div
					className="d-flex justify-content-center align-items-center"
					style={{
						height: '330px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Error404 />
				</div>
			</div>
		</Layout>
	);
};

export default Landing;
