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
	background-image: url('${backgroundImage}');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	padding: 120px 60px 240px;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		background-position: right;
		padding: 120px 30px;
		width: 90%;
	}
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

	@media (max-width: ${S_DEVICES_WIDTH}) {
		width: 200px;

		img {
			height: 30px;
		}

		.appstore {
			height: 22px;
		}
	}
`;
