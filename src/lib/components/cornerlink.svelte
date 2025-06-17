<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAnchorAttributes = $props();
</script>

<a {...rest}>{@render children?.()}</a>

<style>
	a {
		clip-path: polygon(0 45%, 40% 0, 100% 0, 100% 100%, 0 100%);
		color: white;
		padding: 2%;
		margin-right: -3%;
		text-decoration: none;
		background-color: var(--color-orange-500);
	}
</style>
