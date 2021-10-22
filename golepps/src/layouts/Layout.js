import React, { useEffect } from 'react';
import LoaderGlobal from '../components/Loader/LoaderGlobal';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import SEO from '../seo/SEO';
import ErrorMobile from '../components/Errors/ErrorMobile/ErrorMobile';
import { HideLgShowSm, ShowLgHideSm } from '../layouts/Responsive/Responsive';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';
import ErrorLostConnection from '../components/Errors/ErrorLostConnection/ErrorLostConnection';
import { Wrapper } from './styles';

export default function Layout({ children, hideNavbar, pageMeta }) {
	const { loadingGlobal, isOffline } = useSelector((state) => state.global);
	const dispatch = useDispatch();

	useEffect(() => {
		const handleOnline = () => {
			dispatch({
				type: 'NO_INTERNET',
				data: false,
			});
		};

		const handleOffline = () => {
			dispatch({
				type: 'NO_INTERNET',
				data: true,
			});
		};

		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		return function cleanup() {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
		// eslint-disable-next-line
	}, []);

	return (
		<Wrapper>
			<Toaster position="top-center" reverseOrder={false} />
			<ErrorLostConnection isOffline={isOffline} />
			{loadingGlobal && <LoaderGlobal />}
			<SEO
				title={pageMeta?.title}
				description={pageMeta?.description}
				url={pageMeta?.url}
				image={pageMeta?.image}
			/>
			{!hideNavbar && <NavBar />}
			<main>
				<ShowLgHideSm>
					{/* <div className="d-flex"> */}
					<div>{children}</div>
					<Footer />
					{/* </div> */}
					{/* <div className="klob-max">
							<div></div>
					</div> */}
				</ShowLgHideSm>
				<HideLgShowSm>
					<ErrorMobile />
				</HideLgShowSm>
			</main>
			{/* <main>{children}</main>
			<Footer /> */}
		</Wrapper>
	);
}
