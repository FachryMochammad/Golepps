import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useDispatch } from "react-redux";
import {
	MenuHamburger,
	Menu,
	MenuPadding,
	LineVertical,
	ProgramDiv,
} from './styles';
import Button from '../../../../components/Atoms/Button/Button';
import {
	H2Klob,
	H3Klob,
	H1Klob,
} from '../../../../components/Atoms/Typography/Typography';
// import { signOut } from "services/axios/actions";

function Hamburger() {
	const [active, setActive] = useState(false);
	// const dispatch = useDispatch();
	// const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		setActive(false);
	}, [location.pathname]);

	const showMenu = () => {
		if (active) setActive(false);
		else setActive(true);
	};

	return (
		<>
			<MenuHamburger>
				<input
					id="menu__toggle"
					type="checkbox"
					onChange={() => showMenu()}
					checked={active}
				/>
				<label className="menu__btn" htmlFor="menu__toggle">
					<span></span>
				</label>
			</MenuHamburger>
			<Menu visible={active}>
				<MenuPadding>
					<Link to="/subscription">
						<ProgramDiv
							active={location.pathname === '/subscription' ? true : false}
						>
							<H1Klob className="fw-bold">Subscription</H1Klob>
						</ProgramDiv>
					</Link>
					{/* <LineVertical /> */}
					<Link to="/consulting">
						<ProgramDiv
							active={location.pathname === '/consulting' ? true : false}
						>
							<H1Klob className="fw-bold">Consulting</H1Klob>
						</ProgramDiv>
					</Link>
					{/* <LineVertical className="mt-4" /> */}
					<div className="mt-4">
						<Link to="/login">
							<Button
								// onClick={() => signOut(dispatch)}
								// secondary
								primary
								// square
								xsmall
								mobile
								// arrowRightMobile
								className="justify-content-center"
							>
								<H3Klob className="fw-normal">MASUK</H3Klob>
							</Button>
						</Link>
					</div>
					<LineVertical />
					<a href="/#" target="_blank" rel="noreferrer">
						<Button
							// secondary
							// white
							lightGray
							square
							xsmall
							mobile
							arrowRightMobile
						>
							<H2Klob className="fw-normal darkSlateBlue m-0">
								Cari Lowongan
							</H2Klob>
						</Button>
					</a>
				</MenuPadding>
			</Menu>
		</>
	);
}

export default Hamburger;
