// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { ShowLgHideSm } from 'layouts/Responsive/Responsive';
// import { H3Klob, H4Klob } from 'components/Atoms/Typography/Typography';
// import IconProfile from 'components/Atoms/IconProfile/IconProfile';
// import LineVertical from 'components/Atoms/LineVertical/LineVertical';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import theme from 'config/utils/theme';
// import { signOut } from 'services/axios/actions';
// import { IconSignOut, IconBell } from 'components/Atoms/Icon';

// import { SectionRight } from '../styles';

// function AfterLogin() {
// 	const dispatch = useDispatch();
// 	const { dataUser } = useSelector((state) => state.global);
// 	return (
// 		<SectionRight className="d-flex justify-content-end align-items-center">
// 			<ShowLgHideSm className="align-items-center">
// 				<IconProfile
// 					src={
// 						dataUser.mus01.profilePictureUrl !== null
// 							? process.env.REACT_APP_S3_URL + dataUser.mus01.profilePictureUrl
// 							: false
// 					}
// 					name={`${dataUser.mus01.firstName} ${dataUser.mus01.lastName}`}
// 					alt="icon"
// 					className="me-2"
// 				/>
// 				<nav role="navigation" className="me-3">
// 					<ul>
// 						<li>
// 							<div className="d-flex justify-content-end align-items-center">
// 								<H3Klob darkSlateBlue className="fw-bold">
// 									{`${dataUser.mus01.firstName} ${
// 										dataUser.mus01.lastName !== null
// 											? dataUser.mus01.lastName
// 											: ''
// 									}`}
// 								</H3Klob>
// 								<FontAwesomeIcon
// 									className="ms-2"
// 									size="xs"
// 									color={theme.color.darkSlateBlue}
// 									icon={faChevronDown}
// 								/>
// 							</div>
// 							<ul className="dropdown">
// 								<li>
// 									<Link to="/change-password">
// 										<H4Klob className="fw-normal" battleShipGrey>
// 											Ubah kata Sandi
// 										</H4Klob>
// 									</Link>
// 								</li>
// 								<li>
// 									<H4Klob
// 										className="fw-normal"
// 										mandatory
// 										onClick={() => signOut(dispatch)}
// 									>
// 										Keluar
// 									</H4Klob>
// 								</li>
// 							</ul>
// 						</li>
// 					</ul>
// 				</nav>
// 				<div id="ex4">
// 					<div className="p1 position-relative" data-count="4">
// 						<IconBell
// 							className="cursor-pointer"
// 							onClick={() => console.log('iconBell trigger')}
// 						/>
// 					</div>
// 				</div>
// 				<LineVertical
// 					style={{ height: '35px' }}
// 					solid
// 					width1
// 					className="lightGray mx-4"
// 				/>
// 				<div className="">
// 					<IconSignOut
// 						onClick={() => signOut(dispatch)}
// 						className="cursor-pointer"
// 					/>
// 				</div>
// 			</ShowLgHideSm>
// 		</SectionRight>
// 	);
// }

// export default AfterLogin;
