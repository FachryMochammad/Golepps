import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const H2Style = styled.h2`
	font-size: 20px;
	font-family: Montserrat;
	margin: 0;

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
		font-size: 18px;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		font-size: 27px;
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 14px;
	}
`;

export default H2Style;
