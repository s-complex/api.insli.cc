import yaml from 'js-yaml';
import { defineCachedHandler } from 'nitro/cache';
import { ofetch } from 'ofetch';

interface FriendsList {
	[key: string]: { slogan: string; avatar: string; link: string };
}

export default defineCachedHandler(
	async () => {
		const source = await ofetch<string>(
			'https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/list.yml'
		);
		const list = yaml.load(source) as FriendsList;

		const result = Object.fromEntries(
			Object.entries(list).map(([key, value]) => [
				key,
				{ ...value, avatar: `https://api.sirvr.win/linklist/img/${value.avatar}` },
			])
		);

		return result;
	},
	{ maxAge: 60 * 60 }
);
