<script lang="ts">
	import Blogpost from '$lib/blog/blogpost.svelte';
	import { Content, CornerLink, LongCard, PostGrid, SidebarPanel, Title } from '$lib/components';
	import { Blog } from '$lib/services/blog';
	import type { Post } from '$lib/types/Post.type.js';
	import { createRawSnippet, type Snippet } from 'svelte';

	let categories = Blog.defaultCategories;

	export const prerender = true;

	interface Data {
		categories: Array<string>;
		posts: Array<Post>;
	}

	interface Props {
		data: Data;
	}

	interface RenderedPost extends Post {
		rendered: Array<Snippet>;
	}

	let { data }: Props = $props();

	let postSnippets: Array<RenderedPost> = [];

	for (let post of data.posts) {
		if (post.preview) {
			let snippets: Array<Snippet> = [];
			for (let markup of post.preview) {
				let snippet = createRawSnippet(() => {
					return {
						render: () => markup
					};
				});

				snippets.push(snippet);
			}

			postSnippets.push({ ...post, rendered: snippets });
		}
	}
</script>

<section>
	<LongCard title="::About Me">
		My name is Iván Villagrasa and this is my personal home page. My interests are programming,
		music, electronics, engineering, design and photography.

		{#snippet link()}
			<CornerLink href="#">::SEE MORE</CornerLink>
		{/snippet}
	</LongCard>
</section>

<section>
	<Content>
		<div class="title">
			<Title>
				<h2>::Feed.</h2>
			</Title>
			<div class="sections">Categories -></div>
		</div>

		<SidebarPanel>
			{#snippet side()}
				<p>Categories</p>
				<ul>
					{#each categories as category}
						<li><a href="/blog?category={category}/index.html">{category}</a></li>
					{/each}
				</ul>
			{/snippet}

			{#each postSnippets as snippet, i}
				<PostGrid>
					<a href="blog/{snippet.slug}"><h2>{snippet.title}</h2></a>
					<br />
					{#each snippet.rendered as rendered}
						{@render rendered?.()}
					{/each}
					<!-- {#if postSnippets.length > i + 1} -->
					<!-- 	<hr> -->
					<!-- {/if} -->
				</PostGrid>
			{/each}
		</SidebarPanel>
	</Content>
</section>

<style>
	.title {
		display: flex;
		margin-bottom: 3%;
		.sections {
			display: none;
		}
	}

	@media (max-width: 601px) {
		.title {
			margin: 0;
			background-color: var(--color-brown-500);
			.sections {
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
				flex-grow: 2;
				/* font-weight: 700; */
				font-size: 24px;
			}
		}
	}
</style>
