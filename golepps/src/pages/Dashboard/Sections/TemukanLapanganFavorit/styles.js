import styled from 'styled-components';
// import theme from '../../../../config/utils/theme';
import {
	// L_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	// XS_DEVICES_WIDTH,
	// M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

export const Wrapper = styled.div`
	width: 100%;
	/* height: 100vh; */
	padding: 40px 60px;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		padding: 40px 0px;
		width: 90%;
		flex-direction: column;
		align-items: center;
	}
`;

export const TitleDiv = styled.div`
	width: 660px;
	height: 294px;
	margin-left: 22px;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		display: flex;
		flex-direction: column;
		width: 230px;
	}
`;

export const PhotoDiv = styled.div`
	height: 500px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media (max-width: ${S_DEVICES_WIDTH}) {
		/* height: 100%; */
	}
`;
