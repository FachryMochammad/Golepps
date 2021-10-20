import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const FlexLgColumSmStyle = styled.div`
	display: flex;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		flex-direction: column;
		align-items: ${({ center }) => (center ? 'center' : '')};
	}
`;
