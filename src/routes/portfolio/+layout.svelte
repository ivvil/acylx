<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	onMount(() => {
		let el = document.querySelector('#content');

		el?.scrollIntoView({ behavior: 'instant' });
	});
</script>

<div class="centered" id="content">
	{@render children()}
</div>

<style>
	.centered {
		margin-top: 20%;
		display: flex;
		align-items: stretch;
		justify-content: center;
		flex-direction: column;
		width: 100vw;
	}
</style>
