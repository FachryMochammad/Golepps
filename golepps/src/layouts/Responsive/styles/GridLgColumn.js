import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const GridLgColumnStyle = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 50px 140px;
	margin: auto;
	width: 85%;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		grid-template-columns: auto;
		grid-gap: 20px 0px;
		width: 90%;
	}
`;
