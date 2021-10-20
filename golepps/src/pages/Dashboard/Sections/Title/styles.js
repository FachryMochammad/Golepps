import styled from 'styled-components';
// import theme from '../../../../config/utils/theme';
import {
	// L_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	// M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';
import backgroundImage from '../../../../assets/images/background-image-first-div-homepage.png';

export const Wrapper = styled.div`
	width: 100%;
	height: 125vh;
	background-image: url('${backgroundImage}');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	padding: 200px 60px;

	/* @media (max-width: ${S_DEVICES_WIDTH}) {
		.klob-navbar {
			height: 3rem;
		}
	} */
`;

export const TitleDiv = styled.div`
	width: 660px;
	height: 294px;

	img {
		height: 73px;
	}

	.appstore {
		height: 50px;
	}

	/* @media (max-width: ${S_DEVICES_WIDTH}) {
    .klob-navbar {
        height: 3rem;
    }
} */
`;
