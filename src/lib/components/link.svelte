<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAnchorAttributes = $props();
</script>

<span class="link">
	<a {...rest}>{@render children?.()}</a>
</span>

<style>
	link {
		margin-bottom: 5%;
		flex-basis: 200px;
	}

	a {
		background-color: var(--color-blue-400);
		text-decoration: none;
		border: none;
		text-align: left;
	}
</style>
