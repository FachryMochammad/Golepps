import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const P2Style = styled.p`
	font-size: 16px;
	font-family: Montserrat;
	margin: 0;
	line-height: 1.36;
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
	
	${({ greyTransparent }) =>
		greyTransparent &&
		css`
			color: ${theme.color.greyTransparent};
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

  ${({ secondary }) =>
		secondary &&
		css`
			color: ${theme.color.secondary};
		`}
		
	${({ bold }) =>
		bold &&
		css`
			font-weight: bold;
		`}

	${({ link }) =>
		link &&
		css`
			text-decoration: underline;
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

export default P2Style;
