<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: String;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="card">
  <p class="title">{title}</p>
  <div class="card-children">
	{@render children()}
  </div>
</div>

<style>
  
</style>
