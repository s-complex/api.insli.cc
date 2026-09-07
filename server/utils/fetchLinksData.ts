import { fetch } from 'nitro';
import { load } from 'js-yaml';

interface FriendsList {
	[key: string]: { slogan: string; avatar: string; link: string };
}

export async function fetchLinksData() {
	const source = await fetch(
		'https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/list.yml'
	);

	const list = load(await source.text()) as FriendsList;

	return list;
}
