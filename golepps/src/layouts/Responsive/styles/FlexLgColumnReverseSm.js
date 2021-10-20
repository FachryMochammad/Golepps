import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const FlexLgColumReverseSmStyle = styled.div`
	display: flex;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		flex-direction: column-reverse;
		padding: ${({ extraPadding }) => (extraPadding ? '0 41px' : '0 18px')};
	}
`;
