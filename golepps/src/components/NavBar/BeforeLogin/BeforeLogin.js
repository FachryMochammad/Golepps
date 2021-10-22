import React from 'react';
import { NavLink } from 'react-router-dom';
import { SectionMid } from '../styles';

import { ShowLgHideSm } from '../../../layouts/Responsive/Responsive';

import { P3Klob } from '../../Atoms/Typography/Typography';
// import Button from '../../Atoms/Button/Button';
// import LineVertical from '../../Atoms/LineVertical/LineVertical';

function BeforeLogin() {
	// const stateGlobal = useSelector((state) => state.global);
	// const history = useHistory();

	return (
		<>
			<SectionMid className="d-flex">
				<ShowLgHideSm>
					<nav className="shift">
						<ul>
							<li className="px-3">
								<NavLink to="/find-golf-course" activeClassName="active">
									<P3Klob className="fw-bold">Cari Lapangan</P3Klob>
								</NavLink>
							</li>
						</ul>
					</nav>
				</ShowLgHideSm>
			</SectionMid>
		</>
	);
}

export default BeforeLogin;
