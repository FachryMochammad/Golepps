import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useDispatch } from "react-redux";
import {
	MenuHamburger,
	Menu,
	MenuPadding,
	// LineVertical,
	ProgramDiv,
} from './styles';
// import Button from '../../../../components/Atoms/Button/Button';
import {
	// H2Klob,
	// H3Klob,
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
					<Link to="/find-golf-course">
						<ProgramDiv
							active={location.pathname === '/find-golf-course' ? true : false}
						>
							<H1Klob className="fw-bold">Cari Lapangan</H1Klob>
						</ProgramDiv>
					</Link>
				</MenuPadding>
			</Menu>
		</>
	);
}

export default Hamburger;
