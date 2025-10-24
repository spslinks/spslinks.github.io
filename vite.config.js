import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import Critters from 'critters';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'vite-plugin-critters',
			enforce: 'post',
			transformIndexHtml: {
				enforce: 'post',
				async transform(html) {
					const critters = new Critters({ preload: 'swap', compress: true });
					return await critters.process(html);
				}
			}
		}
	]
});
