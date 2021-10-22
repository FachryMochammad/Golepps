import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { ButtonSearchDiv, SearchWrapper, FormSearchDiv } from './styles';
import FormInputSearch from '../../../../../components/FormInputSearch/FormInputSearch';
import Button from '../../../../../components/Atoms/Button/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getActionParams } from './../../../../../services/axios/actions';
import { pathSearchParams } from './../../../../../services/axios/endpoints';

function SearchBar() {
	const [kataKunci, setKataKunci] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();
	const query = new URLSearchParams(useLocation().search);

	useEffect(() => {
		setKataKunci(query.get('search') === null ? '' : `${query.get('search')}`);
		// eslint-disable-next-line
	}, []);

	const search = (e) => {
		e.preventDefault();

		window.scrollTo({ top: 660, behavior: 'smooth' });

		dispatch({ type: 'SET_LOADING_SEARCH_GOLF_COURSE', data: true });

		const params = {
			search: kataKunci,
		};

		getActionParams({ url: pathSearchParams, params })
			.then(({ data }) => {
				dispatch({ type: 'SET_LIST_GOLF_COURSE', data: data });
				dispatch({ type: 'SET_LOADING_SEARCH_GOLF_COURSE', data: false });
			})
			.catch((err) => {
				console.log('Err pathSearchParams', err);
			});

		if (kataKunci) {
			history.push(`?search=${kataKunci}`);
		} else {
			return history.push('/find-golf-course');
		}
	};

	return (
		<SearchWrapper>
			<form onSubmit={(e) => search(e)}>
				<FormSearchDiv>
					<FormInputSearch
						value={kataKunci}
						placeholder="Ketik nama lapangan atau lokasi"
						onChange={(e) => setKataKunci(e.target.value)}
					/>
				</FormSearchDiv>
				<ButtonSearchDiv>
					<Button full noPadding squareRight onClick={search}>
						<FontAwesomeIcon icon={faSearch} size={'lg'} />
					</Button>
				</ButtonSearchDiv>
			</form>
		</SearchWrapper>
	);
}

export default SearchBar;
