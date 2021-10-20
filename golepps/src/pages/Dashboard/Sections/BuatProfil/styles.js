import styled from 'styled-components';
// import theme from '../../../../config/utils/theme';
import {
	// L_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	XS_DEVICES_WIDTH,
	// M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 50px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	/* @media (max-width: ${S_DEVICES_WIDTH}) {
		.klob-navbar {
			height: 3rem;
		}
	} */
`;

export const TitleDiv = styled.div`
	width: 1157px;
	height: 228px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		width: 600px;
		display: flex;
	}

	/* @media (max-width: ${S_DEVICES_WIDTH}) {
    .klob-navbar {
        height: 3rem;
    }
} */
`;

export const PhotoDiv = styled.div`
	height: 500px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	/* @media (max-width: ${XS_DEVICES_WIDTH}) {
		height: 32px;
	} */
`;

export const DownloadDiv = styled.div`
	width: 935px;
	height: 198px;
	margin-top: 80px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

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
