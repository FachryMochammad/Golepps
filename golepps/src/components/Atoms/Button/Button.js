import React from 'react';
import { Wrapper } from './styles';
import {
	faSpinner,
	faChevronRight,
	faArrowLeft,
	faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({
	children,
	primary,
	secondary,
	green,
	square,
	arrowRight,
	arrowRightMobile,
	arrowLeft,
	extraLarge,
	arrowDown,
	loading,
	...props
}) {
	return (
		<Wrapper
			primary={primary}
			secondary={secondary}
			green={green}
			square={square}
			extraLarge={extraLarge}
			{...props}
		>
			{children}
			{arrowRight && (
				<FontAwesomeIcon
					className="ms-2"
					size="sm"
					// color="#ffffff"
					icon={faChevronRight}
				/>
			)}
			{arrowRightMobile && (
				<FontAwesomeIcon
					className="ms-4"
					size="sm"
					// color="#ffffff"
					icon={faChevronRight}
				/>
			)}
			{arrowLeft && <FontAwesomeIcon size="1x" icon={faArrowLeft} />}
			{arrowDown && <FontAwesomeIcon size="1x" icon={faArrowDown} />}
			{loading && (
				<FontAwesomeIcon
					className="ms-4"
					size="lg"
					color="#ffffff"
					icon={faSpinner}
					spin={true}
				/>
			)}
		</Wrapper>
	);
}

export default Button;
