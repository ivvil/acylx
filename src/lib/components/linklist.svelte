<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="links">
	{@render children()}
</div>

<style>
  links {
	display: grid;
	grid-template-columns: 1fr 1fr;
  }
</style>
