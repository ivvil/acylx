<script lang="ts">
	import Card from './components/card.svelte';
	import Link from './components/link.svelte';
	import Linklist from './components/linklist.svelte';

  let cards: HTMLDivElement;
  let cardsState: boolean = false;

	function openMenu() {
	  cards.style.width = cardsState ? '100vw' : '0';
	  cardsState = !cardsState;
	}
</script>

<header>
	<div class="title">
		<a href="/">
			<h1>SHFT.dev</h1>
		</a>
		<h2>A shft into a more open future</h2>
		<hr />
	</div>

	<nav>
		<button class="nav-open" onclick={openMenu}>::Menu.</button>
		<div class="cards" bind:this={cards}>
			<Card title="::Articles">
				<Linklist>
					<Link href="#">Hi</Link>
				</Linklist>
			</Card>
		</div>
	</nav>
</header>

<style>
	header {
		height: 185px;
		display: flex;
		flex: auto;
		justify-content: center;
		line-height: 30%;
	}

	.title {
		text-align: left;
		padding: 2rem;
		background-color: var(--color-orange-500);
		padding-left: 5%;
		padding-right: 5%;
		color: var(--color-neutral-800);

		h1 {
			font-family: 'Corporation Games';
		}
		h2 {
			font-family: 'ChakraPetch Regular';
		}

		hr {
			border-color: var(--color-neutral-800);
		}

		a {
			color: var(--color-neutral-800);
		}
	}

	nav {
		padding-left: 8%;
		padding: 1%;
		padding-right: 15%;
		background-color: var(--color-blue-700);
		color: black;
		font-family: 'ChakraPetch Regular';

		.cards {
			display: grid;
			align-items: stretch;
			gap: 5%;
			line-height: 0%;
			height: 100%;
		}

		.nav-open {
			display: none;
		}
	}

	@media (max-width: 601px) {
		header {
			height: 15vh;
			width: 100%;
			h2 {
				display: none;
			}
			.title {
				width: stretch;
				flex-grow: 3;
			}
		}

		nav {
		  display: flex;
		  flex-direction: row;
			padding: 10% 5%;
			.nav-open {
				display: flex;
				justify-content: center;
				align-items: center;
				writing-mode: vertical-rl;
				padding: 1vh 1vw;
				background-color: transparent;
				border: none;
				color: white;
				font-size: 15px;
			}

			.cards {
				width: 0;
				z-index: 1;
				overflow: hidden;
			}
		}
	}
</style>
