import styled from 'styled-components';
// import theme from '../../../../config/utils/theme';
import {
	// L_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	// M_DEVICES_WIDTH,
	// XS_DEVICES_WIDTH,
} from '../../config/utils/constant';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	/* background-repeat: no-repeat;
	background-position: center;
	background-size: contain; */
	/* padding: 170px 60px; */

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

export const PhotoDiv = styled.div`
	/* height: 500px; */

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const DetailedSection = styled.div`
	padding: 20px 50px 50px;
`;

export const DescriptionDiv = styled.div`
	/* height: 100%; */
	/* background-color: red; */
	/* margin-top: 10px; */
	display: flex;
	justify-content: center;
`;

export const LeftWrapper = styled.div`
	/* height: 100p; */
	width: 70%;
	/* background-color: blue; */
	margin-top: 20px;
	padding: 0 50px 0 0;
`;

export const RightWrapper = styled.div`
	/* height: 100%; */
	width: 30%;
	/* background-color: green; */
	margin-top: 20px;
`;
