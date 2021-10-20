import styled from 'styled-components';
import { H3Klob, P1Klob } from '../Atoms/Typography/Typography';
import { S_DEVICES_WIDTH } from '../../config/utils/constant';
import theme from '../../config/utils/theme';

export const FooterKlob = styled.footer`
	background-color: ${theme.color.darkGreen};
	padding: 30px 0 30px;
	/* margin: auto; */

	.img-logo-klob-footer {
		height: 70px;
		/* margin-bottom: -20px; */

		@media (max-width: ${S_DEVICES_WIDTH}) {
			height: 110px;
		}
	}

	.appstore-footer {
		height: 30px;
		margin-bottom: 7px;

		@media (max-width: ${S_DEVICES_WIDTH}) {
			height: 110px;
		}
	}

	.googlestore-footer {
		height: 45px;
	}
`;

export const FooterDownloadApp = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	img {
		margin-right: 40px;

		@media (max-width: 1024px) {
			margin-right: 0px;
		}
	}

	.logo-download-app-footer {
		img {
			width: 177px;
			height: 52.9px;
		}

		@media (max-width: 1024px) {
			img {
				width: 14.648vw;
				height: auto;
			}
		}

		@media (max-width: 768px) {
			margin-right: 12px;
		}

		@media (max-width: 575px) {
			img {
				width: 124.5px;
			}
		}

		@media (max-width: 480px) {
			img {
				width: 124.5px;
				height: 36.9px;
			}
		}
		@media (min-width: ${S_DEVICES_WIDTH}) {
			margin-bottom: ${(props) => (props.isAuthenticated ? '10px' : 'unset')};
		}
	}

	@media (min-width: ${S_DEVICES_WIDTH}) {
		display: ${(props) => (props.isAuthenticated ? 'block' : 'flex')};
	}
`;

export const H3 = styled(H3Klob)`
	line-height: 1.28;
	color: white;
	margin-bottom: 12px;
	font-weight: bold;
`;

export const P1 = styled(P1Klob)`
	line-height: 1.5;
	color: white;
	margin-bottom: 16px;
	display: ${(props) => (props.type === 'medsos' ? 'inline' : 'unset')};
	margin-left: ${(props) => (props.type === 'medsos' ? '14px' : 'unset')};
	font-weight: normal;
	/* font-stretch: normal; */
	/* font-style: normal; */
	/* letter-spacing: normal; */
`;

export const ULMedsos = styled.ul`
	.fa {
		font-size: 22px;
		width: 25px;
		color: white;
	}
`;

export const ItemFoot = styled.div`
	.klob-hr-footer {
		color: white;
		background-color: #ffffff;
		margin-right: 6.321vw;
	}
	@media (max-width: ${S_DEVICES_WIDTH}) {
		width: 100%;
		padding-left: 32px;
		padding-right: 32px;
		padding-top: ${(props) => (props.top ? '24px' : '20px')};

		.klob-hr-footer {
			margin-right: 0px;
		}

		.list {
			display: flex;
			flex-wrap: wrap;
		}

		.list li {
			width: 50%;
		}

		.list li a {
			margin: 0;
			margin-bottom: 12px;
		}
	}
	&.last {
		@media (max-width: ${S_DEVICES_WIDTH}) {
			padding-bottom: 40px;
		}
	}
`;
