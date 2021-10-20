import React from 'react';
import { LogoNavbar } from './styles';
import golepps from '../../assets/images/golepps-horizontal-1.png';

function LogoNavBar() {
	return (
		<div>
			<LogoNavbar>
				<img src={golepps} alt="klobdashboard" width="100%" height="100%" />
			</LogoNavbar>
		</div>
	);
}

export default LogoNavBar;
