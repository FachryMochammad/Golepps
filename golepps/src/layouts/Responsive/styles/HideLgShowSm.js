import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const HideLgShowSmStyle = styled.div`
	display: none;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		display: flex;
	}
`;
