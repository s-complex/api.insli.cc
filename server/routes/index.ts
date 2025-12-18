import { defineHandler } from 'nitro/h3';

export default defineHandler((event) => {
	return `Hello ${event.url}!`;
});
