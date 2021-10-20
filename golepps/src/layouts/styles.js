import styled, { css } from 'styled-components';
import theme from '../config/utils/theme';
import {
	//   XS_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	//   M_DEVICES_WIDTH,
	//   L_DEVICES_WIDTH,
	//   MAC_DEVICES_WIDTH
} from '../config/utils/constant';

export const Wrapper = styled.div`
	${({ bgBlue }) =>
		bgBlue &&
		css`
			background-color: ${theme.color.bgBlue};
		`}

	.klob-max {
		max-width: 1306px;
	}
	.klob-max-navbar {
		max-width: 1246px;
	}
	.klob-max-dahsboard {
		max-width: 1244px;
		/* border: dashed 1px red; */
	}
	.klob-dashboard {
		margin: 24px auto;
		min-height: calc(100vh - 357px);
	}

	.klob-dashboard-admin {
		margin: 33px auto 0;
		min-height: calc(100vh - 63px);
	}

	.dashboard-timeline {
		/* border: dashed 1px green; */
		width: 202px;
	}
	.dashboard-billing {
		width: 309px;
		height: 213px;
		/* margin: 11px 61px 533px 16.3px; */
		padding: 25px 16px;
		border-radius: 8px;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
		background-color: #fff;
		margin-top: 11px;
		margin-left: 18px;
	}
	.dashboard-top {
		width: 1040px;
		/* border: dashed 1px black; */
	}
	.dashboard-main {
		width: 1240px;
	}

	.border {
		border: dashed 1px red !important;
	}

	.mt-3-klob {
		margin-top: 1rem;

		@media (max-width: ${S_DEVICES_WIDTH}) {
			margin-top: 0.5rem;
		}
	}
	.mt-5 {
		margin-top: 1.25rem;
	}
	/* margin-vertical */
	.my-2-klob {
		margin: 0.5rem 0;

		@media (max-width: ${S_DEVICES_WIDTH}) {
			margin: 0.25rem 0;
		}
	}

	.float-right {
		float: right;
	}
	a {
		text-decoration: none !important;
		color: ${theme.color.darkSlateBlue};
	}
	.cursor-pointer {
		cursor: pointer;
	}
	ol,
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0 !important;
	}

	input[type='checkbox'] {
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		height: 16px;
		width: 16px;
		border: 1px solid #27356a;
		margin: 0;
		border-radius: 2px;
	}

	input[type='checkbox']:checked:after {
		display: block;
	}
	input[type='checkbox']:checked {
		background-color: ${theme.color.darkSlateBlue};
	}

	input[type='checkbox']:hover {
		filter: brightness(90%);
	}

	input[type='checkbox'] {
		cursor: pointer;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		/* background: white; */
		height: 16px;
		width: 16px;
		border: 1px solid #27356a;
		border-radius: 2px;
	}

	input[type='checkbox']:after {
		content: '';
		position: relative;
		left: 30%;
		/* top: 2%; */
		width: 45%;
		height: 80%;
		border: solid #fff;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
		display: none;
	}

	input[type='checkbox']:checked:after {
		display: block;
	}
	input[type='checkbox']:checked {
		background: #27356a;
	}

	input[type='checkbox']:hover {
		filter: brightness(90%);
	}

	/* input[type="radio"]:checked + label,
  input[type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 26px;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #27356a;
  }

  input[type="radio"]:checked,
  input[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  input[type="radio"]:checked + label:before,
  input[type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #27356a;
    border-radius: 100%;
    background: #fff;
  }

  input[type="radio"]:checked + label:after,
  input[type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: #27356a;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  input[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  } */
	/* color setting */
	.primary {
		color: ${theme.color.primary};
	}
	.secondary {
		color: ${theme.color.secondary};
	}
	.white {
		color: ${theme.color.white};
	}
	.lightGreen {
		color: ${theme.color.lightGreen};
	}
	.cinnabar {
		color: ${theme.color.cinnabar};
	}
	.darkSlateBlue {
		color: ${theme.color.darkSlateBlue};
	}
	.battleShipGrey {
		color: ${theme.color.battleShipGrey};
	}
	.lightGray {
		color: ${theme.color.lightGray};
	}
	.battleShipGrey {
		color: ${theme.color.battleShipGrey};
	}
	.bg-blueSelect {
		background-color: ${theme.color.blueSelect};
	}
	.bg-Sunflower {
		background-color: ${theme.color.Sunflower};
	}
	.darkYellow {
		color: #c8a039;
	}
	.text-orange {
		color: ${theme.color.cinnabar};
	}
	.card-klob {
		border-radius: 8px;
		box-shadow: 0 0 10px 0 rgb(0 0 0 / 12%);
		background-color: #fff;
	}
	.mandatory-mark {
		color: ${theme.color.secondary};
	}
`;

export const WrapperDashboard = styled.div`
	background-color: red;
`;

export const MenuLeft = styled.div`
	width: 261px;
	/* height: 671px; */
	margin: 11px 22px 30px 0;
	padding: 20px 0;
	border-radius: 8px;
	background-color: #fff;
	height: max-content;

	nav li > .active {
		color: ${theme.color.darkSlateBlue};
		h3 {
			border-bottom: solid 2px ${theme.color.secondary};
		}
	}
`;

export const LogoCorporate = styled.div`
	justify-content: center;

	img {
		width: 130px;
		height: 100px;
		object-fit: contain;
	}
`;
