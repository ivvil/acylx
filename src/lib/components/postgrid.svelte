<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 50%;
		grid-template-rows: 0.3fr 1fr;
		padding: 10%;
		gap: 0 2%;
		margin: 0;
		grid-auto-flow: row;
		grid-template-areas:
			'title .'
			'content-meta content';
	}
</style>
