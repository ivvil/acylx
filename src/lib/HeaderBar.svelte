<script>
	import Card from "./components/card.svelte";
	import Link from "./components/link.svelte";
	import Linklist from "./components/linklist.svelte";

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
	  <Card title="::Articles">
		<Linklist>
		  <Link href="#">Hi</Link>
		</Linklist>
	  </Card>
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
	  font-family: "ChakraPetch Regular";
	  display: grid;
	  align-items: stretch;
	  gap: 5%;
	  line-height: 0%;
	}
</style>
