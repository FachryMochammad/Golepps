import styled from 'styled-components';
import { S_DEVICES_WIDTH } from '../../config/utils/constant';

export const ErrCard = {
	Wrapper: styled.div`
		@media (max-width: ${S_DEVICES_WIDTH}) {
			padding: 0 16px;
		}
	`,
	Img: styled.div`
		width: 200px;
	`,
	Title: styled.div`
		width: 75%;
	`,
};

export const Wrapper = styled.div`
	height: max-content;
	width: 500px;
	position: fixed;
	top: 32%;
	bottom: 0px;
	background-color: rgb(255, 255, 255);
	box-shadow: rgb(181, 187, 197) 0px 2px 30px 0px;
	z-index: ${({ isOffline }) => (isOffline ? 101 : -1)};
	transform: translateY(-40px);
	opacity: ${({ isOffline }) => (isOffline ? 1 : 0)};
	border-radius: 12px;
	transition: all 0.2s ease-in-out 0s;
	padding: 32px 0;

	@media (max-width: ${S_DEVICES_WIDTH}) {
		width: 85%;
	}
`;
