<script lang="ts">
	import { type Titleable } from '$lib/types/titleable.type';
	import type { Snippet } from 'svelte';

	interface Props extends Titleable {
		children: Snippet;
		link?: Snippet;
	}

	let { title, children, link } = $props();
</script>

<div class="longcard">
	{#if typeof title === 'string'}
		<p class="title">{title}</p>
	{:else}
		{@render title()}
	{/if}
	<div class="content">{@render children()}</div>
	<hr />
	<div class="link">{@render link()}</div>
</div>

<style>
	.longcard {
		padding: 20px;
		margin: 20%;
		margin-bottom: 10%;
		margin-top: 3%;
		background-color: var(--color-blue-500);
		clip-path: polygon(0% 0%, 15% 0%, 20% 23%, 100% 23%, 100% 100%, 0% 100%);
	}

	.title {
		margin-top: 0%;
		font-size: 24px;
		font-weight: 700;
	}

	.content {
		padding-right: 10%;
		margin-bottom: 1%;
	}

	.link {
	  text-align: right;
	}

	hr {
	  display: none;
	  border-color: var(--color-neutral-800);
	}

	@media (max-width: 601px) {
	  .longcard {
		/* padding: 0; */
		margin: 0;
		clip-path: none;
	  }

	  hr {
		display: block;
	  }

	  .link {
		margin-top: 10%;
	  }
	}
</style>
