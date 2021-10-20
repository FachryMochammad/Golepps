import styled, { css } from 'styled-components';
import theme from '../../../config/utils/theme';
import { S_DEVICES_WIDTH } from '../../../config/utils/constant';

export const Wrapper = styled.button`
	width: max-content;
	border-radius: ${({ square }) => (square ? '8px' : '39px')};
	align-items: center;
	text-align: center;
	line-height: 1.28;
	color: #ffffff;
	cursor: pointer;
	padding: 8px 30px;
	border-color: transparent;
	display: flex;

	:hover {
		opacity: 0.9;
	}

	:disabled,
	[disabled] {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
		box-shadow: 3px 4px 6px 0 rgba(1, 2, 8, 0.16);
	}

	${({ mobile }) =>
		mobile &&
		css`
			width: 100%;
			margin: auto;
		`}

	${({ centerMobile }) =>
		centerMobile &&
		css`
			display: inherit;
		`}

  ${({ primary }) =>
		primary &&
		css`
			background-color: ${theme.color.primary};
			box-shadow: 3px 4px 6px 0 rgba(39, 53, 106, 0.5);
		`}


	${({ secondary }) =>
		secondary &&
		css`
			background-color: ${theme.color.secondary};
			box-shadow: 3px 4px 6px 0 rgba(216, 84, 72, 0.5);
		`}

	${({ green }) =>
		green &&
		css`
			background-color: ${theme.color.darkGreen};
			box-shadow: 3px 4px 6px 0 rgba(26, 126, 90, 0.5);
		`}

    ${({ outline }) =>
		outline &&
		css`
			background-color: ${theme.color.white};
			box-shadow: 3px 4px 6px 0 rgba(3, 5, 11, 0.16);
			color: ${theme.color.darkSlateBlue};
			border: solid 1px ${theme.color.darkSlateBlue};
		`}

    ${({ lightGray }) =>
		lightGray &&
		css`
			background-color: ${theme.color.lightGray};
			color: ${theme.color.darkSlateBlue};
			/* box-shadow: 3px 4px 6px 0 rgba(216, 84, 72, 0.5); */
		`}

  ${({ xLarge }) =>
		xLarge &&
		css`
			padding: 8px 51px;
		`}

  ${({ large }) =>
		large &&
		css`
			padding: 14px 40px;
		`}

  ${({ normal }) =>
		normal &&
		css`
			padding: 14px 25px;
		`}

  ${({ small }) =>
		small &&
		css`
			padding: 7px 30px 6px;
		`}

  ${({ xsmall }) =>
		xsmall &&
		css`
			padding: 4px 17px 3px;
		`}

  ${({ xsquare }) =>
		xsquare &&
		css`
			padding: 6px;
		`}

  ${({ full }) =>
		full &&
		css`
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
		`}

  ${({ noPadding }) =>
		noPadding &&
		css`
			padding: 0px 0px;
		`}

  ${({ squareRight }) =>
		squareRight &&
		css`
			border-radius: 0px 4px 4px 0px;
		`}

  ${({ squareLeft }) =>
		squareLeft &&
		css`
			border-radius: 4px 0px 0px 4px;
		`}

  ${({ active }) =>
		active &&
		css`
			background-color: ${theme.color.pattensBlue};
			color: ${theme.color.darkSlateBlue};
			box-shadow: 3px 4px 6px 0 rgba(39, 53, 106, 0.5);
		`}

  ${({ inactive }) =>
		inactive &&
		css`
			background-color: ${theme.color.lightGray};
			color: ${theme.color.battleShipGrey};
			box-shadow: 3px 4px 6px 0 rgba(1, 2, 8, 0.16);
		`}

	.fa-sm {
		font-size: 12px;
	}

	@media (max-width: ${S_DEVICES_WIDTH}) {
		justify-content: space-between;

		${({ large }) =>
			large &&
			css`
				padding: 8.2px 18.2px 10.8px 18.8px;
			`}

		${({ small }) =>
			small &&
			css`
				padding: 5px 19.3px 5px 19.7px;
			`}

      ${({ square }) =>
			square &&
			css`
				padding: 11px 16px;
			`}

    ${({ normal }) =>
			normal &&
			css`
				padding: 8.2px 24.2px 10.8px 24.8px;
			`}
	}
`;

export const Coupon = styled.button`
	padding: 12px 15px 11px;
	border-radius: 6px;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	border-color: transparent;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		h5 {
			font-size: 12px;
		}
	}
`;

export const Icon = styled.div`
	width: 21px;
`;
