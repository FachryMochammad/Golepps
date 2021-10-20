import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const P4Style = styled.p`
	font-size: 12px;
	font-family: Montserrat;
	margin: 0;
	line-height: 1.58;
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

    ${({ blueSkill }) =>
		blueSkill &&
		css`
			color: ${theme.color.blueSkill};
		`}

  ${({ white }) =>
		white &&
		css`
			color: ${theme.color.white};
		`}
		
  ${({ cinnabar }) =>
		cinnabar &&
		css`
			color: ${theme.color.cinnabar};
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
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 12px;
	}
`;

export default P4Style;
