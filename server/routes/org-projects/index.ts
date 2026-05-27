import { defineCachedHandler } from 'nitro/cache';
import { fetch } from 'nitro';

interface Repo {
	name: string;
	repo: string;
	description?: string;
}

export default defineCachedHandler(
	async () => {
		const response = await fetch('https://ungh.cc/users/s-complex/repos');

		const { repos }: { repos: Repo[] } = await response.json();

		return repos.map((item) => ({
			name: item.name,
			html_url: `https://github.com/${item.repo}`,
			description: item.description || '',
		}));
	},
	{ maxAge: 3600 }
);
