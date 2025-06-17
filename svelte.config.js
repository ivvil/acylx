import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * @type {import('mdsvex').MdsvexOptions}
 */
const mdsvexOpts  = {
  extensions: ['.md']
};

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOpts)],
	kit: { adapter: adapter() },
  extensions: ['.svelte', '.svx', '.md']
};

export default config;
