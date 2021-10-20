import styled, { css } from 'styled-components';
import theme from '../../../../config/utils/theme';

export const MenuHamburger = styled.div`
	#menu__toggle {
		opacity: 0;
	}

	#menu__toggle:checked ~ .menu__btn > span {
		transform: rotate(45deg);
	}
	#menu__toggle:checked ~ .menu__btn > span::before {
		top: 0;
		transform: rotate(0);
	}
	#menu__toggle:checked ~ .menu__btn > span::after {
		top: 0;
		transform: rotate(90deg);
	}

	.menu__btn {
		display: flex;
		align-items: center;
		position: fixed;
		top: 12px;
		right: 16px;
		width: 17px;
		height: 26px;
		cursor: pointer;
		z-index: 1;
	}

	.menu__btn > span,
	.menu__btn > span::before,
	.menu__btn > span::after {
		display: block;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: ${theme.color.battleShipGrey};
		transition-duration: 0.25s;
	}
	.menu__btn > span::before {
		content: '';
		top: -6px;
	}
	.menu__btn > span::after {
		content: '';
		top: 6px;
	}
`;

export const Menu = styled.div`
	position: absolute;
	margin-top: 35px;
	left: 0px;
	background-color: #fff;
	width: 100%;
	overflow: hidden;
	height: 0;
	transition: all 0.25s ease-out;
	z-index: 1;

	${({ visible }) =>
		visible &&
		css`
			height: 100vh;
			transition: all 0.25s ease-in;
		`}
`;

export const MenuPadding = styled.div`
	padding: 16px 23px;
`;

export const LineVertical = styled.div`
	width: 100%;
	height: 1px;
	margin: 19.5px 0px;
	background-color: #e8e9e9;
`;

export const ProgramDiv = styled.div`
	display: flex;
	padding: 7px 0px;
	color: ${theme.color.darkSlateBlue};

	${({ active }) =>
		active &&
		css`
			border-bottom: solid 3px ${theme.color.cinnabar};
			font-weight: bold;
		`}
`;
