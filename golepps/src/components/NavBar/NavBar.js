import React from 'react';
// import { Link, useHistory, useLocation } from "react-router-dom";

import { Link, NavLink } from 'react-router-dom';
import { Wrapper, SectionLeft, WrapperHeader } from './styles';
import Hamburger from './Section/Hamburger/Hamburger';
import LogoNavBar from '../Logo/LogoNavBar';
import { HideLgShowSm } from '../../layouts/Responsive/Responsive';
// import BeforeLogin from './BeforeLogin/BeforeLogin';
// import AfterLogin from './AfterLogin/AfterLogin';
// import { useSelector } from 'react-redux';
import { H2Klob } from '../Atoms/Typography/Typography';

function NavBar() {
	// const dispatch = useDispatch();
	// const stateGlobal = useSelector((state) => state.global);
	// const history = useHistory();

	return (
		<Wrapper>
			<div className="klob-max-navbar klob-navbar d-flex align-items-center justify-content-between m-auto">
				{/* {console.log("stateGlobal di navbar", stateGlobal)} */}
				<SectionLeft>
					<Link to="/sad">
						<LogoNavBar />
					</Link>
				</SectionLeft>
				{/* {stateGlobal.isAuthenticated && <AfterLogin />}
				{!stateGlobal.isAuthenticated && <BeforeLogin />} */}

				<HideLgShowSm>
					<Hamburger />
				</HideLgShowSm>
			</div>
			<HideLgShowSm>
				<WrapperHeader>
					<nav>
						<ul>
							<li className="px-3">
								<NavLink to="/subscription" activeClassName="active">
									<H2Klob className="fw-bold">Subscription</H2Klob>
								</NavLink>
							</li>

							<li className="px-3">
								<NavLink to="/consulting" activeClassName="active">
									<H2Klob className="fw-bold">Consulting</H2Klob>
								</NavLink>
							</li>
						</ul>
					</nav>
				</WrapperHeader>
			</HideLgShowSm>
		</Wrapper>
	);
}

export default NavBar;
