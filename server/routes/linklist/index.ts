import yaml from 'js-yaml';

interface FriendsList {
	[key: string]: { slogan: string; avatar: string; link: string };
}

export default defineCachedEventHandler(
	async () => {
		const source = await $fetch<string>(
			'https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/list.yml'
		);
		const list = yaml.load(source) as FriendsList;

		const result = Object.fromEntries(
			Object.entries(list).map(([key, value]) => [
				key,
				{ ...value, avatar: `https://api.insli.cc/linklist/img/${value.avatar}` },
			])
		);

		return result;
	},
	{ maxAge: 60 * 60 }
);
