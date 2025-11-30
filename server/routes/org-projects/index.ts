export default defineEventHandler(async () => {
	const { repos = [] } = await $fetch<{
		repos?: { name: string; repo: string; description?: string }[];
	}>('https://ungh.cc/users/s-complex/repos');

	return repos.map((item) => ({
		name: item.name,
		html_url: `https://github.com/${item.repo}`,
		description: item.description || '',
	}));
});
