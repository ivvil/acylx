<script lang="ts">
	import Blogpost from '$lib/blog/blogpost.svelte';
	import { Content, CornerLink, LongCard, PostGrid, SidebarPanel, Title } from '$lib/components';
	import { Blog } from '$lib/services/blog';
	import type { Post } from '$lib/types/Post.type.js';
	import { createRawSnippet, type Snippet } from 'svelte';

	let categories = Blog.defaultCategories;

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
		</div>

		<SidebarPanel>
			{#snippet side()}
				<p>Categories</p>
				<ul>
					{#each categories as category}
						<li><a href="/blog?category={category}">{category}</a></li>
					{/each}
				</ul>
			{/snippet}

			{#each postSnippets as snippet}
				<PostGrid>
					<a href="blog/{snippet.slug}"><h2>{snippet.title}</h2></a>
					<br />
					{#each snippet.rendered as rendered}
						{@render rendered?.()}
					{/each}
				</PostGrid>
			{/each}
		</SidebarPanel>
	</Content>
</section>

<style>
	.title {
		margin-bottom: 3%;
	}
</style>
