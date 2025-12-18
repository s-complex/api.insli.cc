import { defineHandler } from 'nitro/h3';
import { ofetch } from 'ofetch';

export default defineHandler(async () => {
	const { repos = [] } = await ofetch<{
		repos?: { name: string; repo: string; description?: string }[];
	}>('https://ungh.cc/users/s-complex/repos');

	return repos.map((item) => ({
		name: item.name,
		html_url: `https://github.com/${item.repo}`,
		description: item.description || '',
	}));
});
