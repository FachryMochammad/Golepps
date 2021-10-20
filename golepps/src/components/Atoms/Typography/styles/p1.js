import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const P1Style = styled.p`
	font-size: 20px;
	font-family: Montserrat;
	margin: 0;
	line-height: 1.25;
	letter-spacing: normal;

	${({ primary }) =>
		primary &&
		css`
			color: ${theme.color.primary};
		`}

	${({ battleShipGrey }) =>
		battleShipGrey &&
		css`
			color: ${theme.color.battleShipGrey};
		`}

	${({ darkSlateBlue }) =>
		darkSlateBlue &&
		css`
			color: ${theme.color.darkSlateBlue};
		`}

  ${({ white }) =>
		white &&
		css`
			color: ${theme.color.white};
		`}
		
	${({ bold }) =>
		bold &&
		css`
			font-weight: bold;
		`}

  @media (max-width: ${M_DEVICES_WIDTH}) {
		font-size: 12px;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		font-size: 16px;
		line-height: 1.35;
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 12px;
	}
`;

export default P1Style;
