import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// static literal pattern — required by Vite
const htmlFiles = import.meta.glob('$lib/privacy/*.html', {
	query: '?raw',
	import: 'default',
	eager: true
});

export const load: PageLoad = ({ params }) => {
	const path = `/src/lib/privacy/${params.slug}.html`;
	const content = htmlFiles[path];

	if (!content) {
		error(404, 'Not found');
	}

	return {
    appName: params.slug,
    content
  };
};
