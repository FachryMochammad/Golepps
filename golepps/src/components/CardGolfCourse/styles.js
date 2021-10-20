import styled from 'styled-components';
// import { S_DEVICES_WIDTH } from '../../config/utils/constant';
import theme from '../../config/utils/theme';

export const Wrapper = styled.div`
	.card {
		transition: 0.1s;
		-webkit-transition: all 0.5s;
	}

	.card-image {
		transition: 0.35s;
	}

	.card-image:hover {
		transition: 0.35s;
		cursor: pointer;
	}

	.card:hover {
		z-index: 1;
		box-shadow: 0 12px 20px rgba(26, 126, 90, 0.5);
		border: none;
		background-color: transparent;
		-webkit-transform: translate(0, -0.5em);
	}

	.game-title {
		font-weight: 700;
		word-wrap: break-word;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.game-title:hover {
		color: ${theme.color.darkGreen};
		cursor: pointer;
	}

	.game-title.detail:hover {
		color: white;
		cursor: default;
	}

	.game-genre {
		font-size: 0.8rem;
		font-weight: 500;
		background-color: #772ce8;
		border-radius: 50px;
		padding: 2px 7px;
	}

	.game-desc {
		font-size: 0.9rem;
		word-wrap: break-word;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
	}
`;
