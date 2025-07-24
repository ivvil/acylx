<script lang="ts">
	let { data } = $props();

	export const prerender = true;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>{data.meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="tag">{category}</span>
		{/each}
	</div>

	<div class="main-content">
		{@render data.content?.()}
	</div>
</article>
