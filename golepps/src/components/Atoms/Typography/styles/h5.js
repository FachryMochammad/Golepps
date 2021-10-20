import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const H5Style = styled.h5`
	font-size: 14px; //berubah ngikutin button header navbar di zeplin employerss
	font-family: Montserrat;
	margin: 0;
	/* line-height: 1.58; */

	${({ darkSlateBlue }) =>
		darkSlateBlue &&
		css`
			color: ${theme.color.darkSlateBlue};
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

    ${({ cinnabar }) =>
		cinnabar &&
		css`
			color: ${theme.color.cinnabar};
		`}

  @media (max-width: ${M_DEVICES_WIDTH}) {
		font-size: 11px;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		font-size: 14px;
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 9.5px;
	}
`;

export default H5Style;
