import styled from 'styled-components';
// import theme from '../../../../config/utils/theme';
import {
	// L_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	// M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';
import backgroundImage from '../../../../assets/images/background-image-2.png';

export const Wrapper = styled.div`
	width: 100%;
	padding: 200px 60px;
	background-image: url('${backgroundImage}');
	background-repeat: no-repeat;
	background-position: top;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	/* @media (max-width: ${S_DEVICES_WIDTH}) {
		.klob-navbar {
			height: 3rem;
		}
	} */
`;

export const TitleDiv = styled.div`
	width: 820px;
	height: 232px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		width: 495px;
		display: flex;
	}
	/* @media (max-width: ${S_DEVICES_WIDTH}) {
    .klob-navbar {
        height: 3rem;
    }
} */
`;
