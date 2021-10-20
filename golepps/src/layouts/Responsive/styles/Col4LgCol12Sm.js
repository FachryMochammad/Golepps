import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const Col4LgCol12SmStyle = styled.div`
	width: 34%;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		width: 100%;
	}
`;
