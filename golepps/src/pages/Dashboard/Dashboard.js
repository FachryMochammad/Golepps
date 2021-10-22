import React, { lazy, useEffect } from 'react';
import { Wrapper } from './styles';
const Layout = lazy(() => import('../../layouts/Layout'));
const Title = lazy(() => import('./Sections/Title'));
const TemukanLapanganFavorit = lazy(() =>
	import('./Sections/TemukanLapanganFavorit')
);
const Scorecard = lazy(() => import('./Sections/Scorecard'));
const CatatJarakPukulan = lazy(() => import('./Sections/CatatJarakPukulan'));
const BuatProfil = lazy(() => import('./Sections/BuatProfil'));

function Dashboard() {
	useEffect(() => {
		window.scroll({ top: 0, behavior: 'smooth' });
	}, []);
	return (
		<Layout>
			<Wrapper>
				<div className="klob-max m-auto">
					<Title />
					<TemukanLapanganFavorit />
					<Scorecard />
					<CatatJarakPukulan />
					<BuatProfil />
				</div>
			</Wrapper>
		</Layout>
	);
}

export default Dashboard;
