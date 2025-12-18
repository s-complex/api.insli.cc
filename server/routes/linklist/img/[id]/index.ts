import { defineCachedHandler } from 'nitro/cache';
import { ofetch } from 'ofetch';

export default defineCachedHandler(
	async (event) => {
		const { id } = event.context.params;
		return await ofetch(
			`https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/img/${id}`
		);
	},
	{ maxAge: 1209600 }
);
