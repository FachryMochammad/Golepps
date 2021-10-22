import styled, { css } from 'styled-components';
import theme from '../../../config/utils/theme';
import { XS_DEVICES_WIDTH } from '../../../config/utils/constant';

export const Input = styled.input`
	/* margin: 8px 0 0; */
	/* height: 47px; */
	padding: 13.5px 70px 13.5px;
	border-radius: 30px;
	border: solid 1px ${theme.color.darkGreen};
	background-color: ${theme.color.darkGreen};
	color: #fff;
	font-size: 16px;
	font-family: 'Montserrat';
	width: -webkit-fill-available;

	::placeholder {
		color: #fff;
		opacity: 0.8;
	}

	&.border-orange {
		border: 1px solid ${theme.color.cinnabar};
	}

	${(props) =>
		props.disabled &&
		css`
			border-radius: 6px;
			border: solid 1px #707070;
			background-color: #e8e9e9;
		`}

	${({ searchBox }) =>
		searchBox &&
		css`
			box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.09);
			/* border: solid 1px red; */
		`}

  @media (max-width: ${XS_DEVICES_WIDTH}) {
		font-size: 10px;
		padding: 11px 12px;
	}
`;
