import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const H3Style = styled.h3`
	font-size: 18px;
	font-family: Montserrat;
	margin: 0;
	line-height: 1.28;
	letter-spacing: normal;

	${({ darkSlateBlue }) =>
		darkSlateBlue &&
		css`
			color: ${theme.color.darkSlateBlue};
		`}

	${({ battleShipGrey }) =>
		battleShipGrey &&
		css`
			color: ${theme.color.battleShipGrey};
		`}

  ${({ primary }) =>
		primary &&
		css`
			color: ${theme.color.primary};
		`}

  ${({ cinnabar }) =>
		cinnabar &&
		css`
			color: ${theme.color.cinnabar};
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
		font-size: 15px;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		font-size: 25px;
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 12px;
	}
`;

export default H3Style;
