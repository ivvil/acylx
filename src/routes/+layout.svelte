<script lang="ts">
	import type { Snippet } from 'svelte';
	import HeaderBar from '$lib/HeaderBar.svelte';
	import './style.css';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<HeaderBar />

<div class="background-text">:::JUST TOO SLOW.</div>

{@render children()}

<style>
	.background-text {
		writing-mode: vertical-rl;
		color: var(--color-neutral-400);
		font-size: 150px;
		position: absolute;
		top: 1%;
		z-index: -1;
		left: 0%;
		font-family: 'Starbirl';
		white-space: nowrap;
		/* TODO: Figure out how to make it visible without having size */
	}
</style>
