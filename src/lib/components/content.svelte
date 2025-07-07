<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="content">
	{@render children()}
</div>

<style>
	.content {
		z-index: 1;
		padding: 20px;
		border-radius: 8px;
		margin: 20%;
		margin-top: 5%;
		background-color: white;
	}

	@media (max-width: 601px) {
	  .content {
		margin: 0;
		/* background-color: transparent; */
		border-radius: 0;
		padding: 0;
	  }
	}
</style>
