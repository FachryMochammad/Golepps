import styled from 'styled-components';
import { XS_DEVICES_WIDTH } from '../../config/utils/constant';

export const Wrapper = styled.div`
	margin-bottom: 51px;
`;

export const LogoBox = styled.div`
	width: 190px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const LogoNavbar = styled.div`
	height: 45px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media (max-width: ${XS_DEVICES_WIDTH}) {
		height: 32px;
	}
`;
