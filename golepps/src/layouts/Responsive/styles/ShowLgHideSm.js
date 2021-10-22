import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const ShowLgHideSmStyle = styled.div`
	/* display: flex; */

	@media (max-width: ${S_DEVICES_WIDTH}) {
		display: none;
	}
`;
