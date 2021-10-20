import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const FlexColumnStyle = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		padding: ${({ extraPadding }) => (extraPadding ? '0 41px' : '0 18px')};
	}
`;
