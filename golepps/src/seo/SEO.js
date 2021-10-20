import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, image }) {
	return (
		<Helmet
			title={title}
			htmlAttributes={{ lang: 'en' }}
			meta={[
				{
					name: `description`,
					content: description,
				},
				{
					property: 'og:url',
					content: url,
				},
				{
					property: 'og:title',
					content: title,
				},
				{
					property: 'og:description',
					content: description,
				},
				{
					property: 'og:image',
					content: image,
				},
				{
					property: 'twitter:title',
					content: title,
				},
				{
					property: 'twitter:description',
					content: description,
				},
				{
					property: 'twitter:image',
					content: image,
				},
			]}
		/>
	);
}
