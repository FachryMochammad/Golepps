// import React from 'react';
// import { useSelector } from 'react-redux';

// import { NavLink, useHistory } from 'react-router-dom';
// import { SectionMid, SectionRight } from '../styles';

// import { ShowLgHideSm } from 'layouts/Responsive/Responsive';

// import { H3Klob, H5Klob } from 'components/Atoms/Typography/Typography';
// import Button from 'components/Atoms/Button/Button';
// import LineVertical from 'components/Atoms/LineVertical/LineVertical';

// function BeforeLogin() {
// 	const stateGlobal = useSelector((state) => state.global);
// 	const history = useHistory();

// 	return (
// 		<>
// 			<SectionMid className="d-flex">
// 				<ShowLgHideSm>
// 					<nav className="shift">
// 						<ul>
// 							{stateGlobal.showMenuSubscription && (
// 								<li className="px-3">
// 									<NavLink to="/subscription" activeClassName="active">
// 										<H3Klob className="fw-bold">Subscription</H3Klob>
// 									</NavLink>
// 								</li>
// 							)}

// 							<li className="px-3">
// 								<NavLink to="/consulting" activeClassName="active">
// 									<H3Klob className="fw-bold">Consulting</H3Klob>
// 								</NavLink>
// 							</li>
// 						</ul>
// 					</nav>
// 				</ShowLgHideSm>
// 			</SectionMid>
// 			<SectionRight className="d-flex justify-content-end align-items-center">
// 				<ShowLgHideSm>
// 					{stateGlobal.showMenuSubscription && (
// 						<>
// 							<div className="d-flex align-items-center">
// 								<Button
// 									primary
// 									white
// 									small
// 									className="me-2"
// 									onClick={() => history.push('/login')}
// 								>
// 									<H5Klob className="fw-normal">MASUK</H5Klob>
// 								</Button>
// 							</div>
// 							<LineVertical dashed width2 className="darkSlateBlue mx-4" />
// 						</>
// 					)}

// 					<div className="d-flex align-items-center">
// 						<a
// 							href={`${process.env.REACT_APP_BASE_URL_LOGIN}`}
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							<Button lightGray white square xsmall arrowRight className="">
// 								<H3Klob className="fw-bold">Cari Lowongan</H3Klob>
// 							</Button>
// 						</a>
// 					</div>
// 				</ShowLgHideSm>
// 			</SectionRight>
// 		</>
// 	);
// }

// export default BeforeLogin;
