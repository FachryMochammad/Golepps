import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const H4Style = styled.h4`
	font-size: 16px;
	font-family: Montserrat;
	margin: 0;
	color: ${theme.color.darkSlateBlue};

	${({ darkSlateBlue }) =>
		darkSlateBlue &&
		css`
			color: ${theme.color.darkSlateBlue};
		`}

	${({ lightCoral }) =>
		lightCoral &&
		css`
			color: ${theme.color.lightCoral};
		`}
  
    ${({ cinnabar }) =>
		cinnabar &&
		css`
			color: ${theme.color.cinnabar};
		`}

  ${({ battleShipGrey }) =>
		battleShipGrey &&
		css`
			color: ${theme.color.battleShipGrey};
		`}

  ${({ secondary }) =>
		secondary &&
		css`
			color: ${theme.color.secondary};
		`}

    ${({ primary }) =>
		primary &&
		css`
			color: ${theme.color.primary};
		`}

    ${({ white }) =>
		white &&
		css`
			color: ${theme.color.white};
		`}
    
    ${({ mandatory }) =>
		mandatory &&
		css`
			color: ${theme.color.mandatory};
		`}

  @media (max-width: ${M_DEVICES_WIDTH}) {
		font-size: 12px;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		font-size: 17px;
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 10px;
	}
`;

export default H4Style;
