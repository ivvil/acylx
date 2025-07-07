import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * @type {import('mdsvex').MdsvexOptions}
 */
const mdsvexOpts = {
	extensions: ['.md']
};

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOpts)],
	kit: {
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
