<script lang="ts">
	import { type Titleable } from '$lib/types/titleable.type';
	import type { Snippet } from 'svelte';

	interface Props extends Titleable {
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="card">
	{#if typeof title === 'string'}
		<p class="title">{title}</p>
	{:else}
		{@render title()}
	{/if}

	<div class="card-children">
		{@render children()}
	</div>
</div>

<style>
	.card {
		padding: 5%;
		background-color: var(--color-blue-500);
		clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0);
	}

	.card-children {
		padding-top: 17px;
		padding-left: 32px;
		padding-right: 10%;
	}

	.title {
		font-size: 24px;
		font-family: 'ChakraPetch Regular';
		margin-right: 20px;
		font-weight: 700;
	}
</style>
