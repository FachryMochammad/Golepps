import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';
import {
	XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../../../config/utils/constant';

const BigTitleStyle = styled.h1`
	font-size: 56px;
	font-family: Montserrat;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	margin: 0;

	${({ download }) =>
		download &&
		css`
			font-size: 40px;
		`}

	${({ findGolfCourse }) =>
		findGolfCourse &&
		css`
			font-size: 30px;
		`}

	${({ darkSlateBlue }) =>
		darkSlateBlue &&
		css`
			color: ${theme.color.darkSlateBlue};
		`}

	${({ darkGreen }) =>
		darkGreen &&
		css`
			color: ${theme.color.darkGreen};
		`}

	${({ primary }) =>
		primary &&
		css`
			color: ${theme.color.primary};
		`}

  @media (max-width: ${M_DEVICES_WIDTH}) {
		font-size: 20px;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		font-size: 30px;
	}
	@media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 20px;
		line-height: 1.05;
	}
`;

export default BigTitleStyle;
