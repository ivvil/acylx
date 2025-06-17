<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		side: Snippet;
	}

	let { children, side } = $props();
</script>

<div class="sidebar-pannel">
	<div class="sidebar">
		{@render side()}
	</div>
	<div class="main">
		{@render children()}
	</div>
</div>

<style>
	.sidebar-pannel {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 5% 0px;
		grid-template-areas: 'sidebar main';
	}

	.sidebar {
		margin-left: 15%;
		padding: 10%;
		color: white;
		padding-top: 30%;
		grid-area: sidebar;
		background-color: var(--color-brown-500);
		clip-path: polygon(0 55px, 40% 0, 100% 0, 100% 100%, 80px 100%, 0% 95%);

		a {
			color: white;
			text-decoration: none;
		}

		ul {
			margin-top: 0;
		}
	}

	.main {
		padding: 10%;
		margin: 0px;
		background-color: var(--color-orange-700);
		clip-path: polygon(
			0 0,
			80% 0,
			80% 50px,
			90% 100px,
			85% 100px,
			100% 100px,
			100% 90%,
			80% 100%,
			0 100%
		);
	}
</style>
