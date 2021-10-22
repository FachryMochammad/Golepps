import React from 'react';
import { Wrapper } from './styles';
import { Input } from '../Atoms/Input/Input';
// import Skeleton from 'react-loading-skeleton';

function FormInput({ label, loading, placeholder, ...props }) {
	return (
		<Wrapper>
			{!loading && (
				<div className="">
					<Input searchBox placeholder={placeholder} type="search" {...props} />
				</div>
			)}
			{/* {loading && <Skeleton height={38} />} */}
		</Wrapper>
	);
}

export default FormInput;
