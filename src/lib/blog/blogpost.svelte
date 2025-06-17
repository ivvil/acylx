<script lang="ts">
	import Postgrid from '$lib/components/postgrid.svelte';
	import type { Titleable } from '$lib/types/titleable.type';
	import type { Snippet } from 'svelte';

	interface Props extends Titleable {
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<Postgrid>
	<a href="#">
		{#if typeof title === 'string'}
			<p class="title">{title}</p>
		{:else}
			{@render title()}
		{/if}</a
	>

	<br />

	{@render children()}
</Postgrid>
