import styled from 'styled-components';
import theme from '../../config/utils/theme';
import {
	L_DEVICES_WIDTH,
	S_DEVICES_WIDTH,
	M_DEVICES_WIDTH,
} from '../../config/utils/constant';

export const Wrapper = styled.div`
	width: 100%;
	object-fit: contain;
	/* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12); */
	background-color: #ffffff;
	position: sticky;
	top: 0;
	z-index: 1000;

	.klob-navbar {
		height: 63px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding-left: 0;
	}

	li {
		color: #fff;
		display: block;
		float: left;
		position: relative;
		text-decoration: none;
		transition-duration: 0.5s;
	}

	li:hover {
		cursor: pointer;
	}

	ul li ul {
		background: #ffffff;
		visibility: hidden;
		opacity: 0;
		min-width: 5rem;
		position: absolute;
		transition: all 0.5s ease;
		margin-top: 12px;
		right: 0;
		display: none;
		width: max-content;
		padding: 12px 0;
	}

	ul li:hover > ul,
	ul li ul:hover {
		visibility: visible;
		opacity: 1;
		display: block;
	}

	ul li ul li {
		clear: both;
		width: 100%;
		padding: 6px 12px;
	}

	#ex4 .p1[data-count]:after {
		position: absolute;
		right: -6px;
		top: -5px;
		content: attr(data-count);
		font-size: 10px;
		/* padding: 0.2em; */
		border-radius: 50%;
		line-height: 16px;
		color: white;
		background: ${theme.color.secondary};
		text-align: center;
		min-width: 16px;
		//font-weight:bold;
	}

	.fa-lg {
		font-size: 26px;
	}

	@media (max-width: ${L_DEVICES_WIDTH}) {
		.klob-navbar {
			padding: 0 16px;
		}
	}

	@media (max-width: ${S_DEVICES_WIDTH}) {
		.klob-navbar {
			height: 3rem;
		}
		/* box-shadow: none; */
	}
`;

export const WrapperHeader = styled.div`
	border-top: 1px solid #e8e9e9;
	height: 50px;
	width: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;

	ul {
		list-style: none;
		padding-left: 0;
	}

	li:nth-child(1) {
		margin-left: 22px;
	}

	li {
		color: #fff;
		display: block;
		float: left;
		position: relative;
		text-decoration: none;
		transition-duration: 0.5s;
		padding: 9px 0 0;
	}

	li:hover {
		cursor: pointer;
	}

	ul li ul {
		background: #ffffff;
		visibility: hidden;
		opacity: 0;
		min-width: 5rem;
		position: absolute;
		transition: all 0.5s ease;
		margin-top: 12px;
		right: 0;
		display: none;
		width: max-content;
		padding: 12px 0;
	}

	ul li:hover > ul,
	ul li ul:hover {
		visibility: visible;
		opacity: 1;
		display: block;
	}

	ul li ul li {
		clear: both;
		width: 100%;
		padding: 6px 12px;
	}

	nav li a {
		color: ${theme.color.darkSlateBlue};
	}
	nav li > .active {
		color: ${theme.color.darkSlateBlue};
		h2 {
			border-bottom: solid 2px ${theme.color.secondary};
		}
	}
`;

export const SectionLeft = styled.div`
	/* width: 15%; */
	@media (max-width: ${M_DEVICES_WIDTH}) {
		/* width: 18%; */
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		width: auto;
	}
`;
export const SectionMid = styled.div`
	width: 50%;
	nav li a {
		color: ${theme.color.darkSlateBlue};
	}
	nav li > .active {
		color: ${theme.color.darkSlateBlue};
		h3 {
			border-bottom: solid 2px ${theme.color.secondary};
		}
	}
	@media (max-width: ${M_DEVICES_WIDTH}) {
		width: 47%;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		width: auto;
	}
`;
export const SectionRight = styled.div`
	width: 35.5%;
	li {
		padding: 16px 0;
	}

	.dropdown {
		box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.09);
	}

	@media (max-width: ${S_DEVICES_WIDTH}) {
		width: 65%;
	}
`;
