import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const H1Style = styled.h1`
	font-size: 25px;
	font-family: Montserrat;
	margin: 0;
	color: ${theme.color.darkSlateBlue};

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

	${({ bold }) =>
		bold &&
		css`
			font-weight: bold;
		`}

  @media (max-width: ${M_DEVICES_WIDTH}) {
		font-size: 20px;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		font-size: 30px;
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 16px;
	}
`;

export default H1Style;
