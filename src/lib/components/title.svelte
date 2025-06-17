<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="title">
	{@render children()}
</div>

<style>
	.title {
		padding: 1%;
		padding-left: 2%;
		padding-right: 8%;
		width: fit-content;
		background-color: var(--color-green-500);
		clip-path: polygon(0 0, 60% 0, 100% 100%, 0% 100%);
	}
</style>
