import type { Post } from "$lib/types/Post.type";


let apiVer = "0.1";

export async function load({ fetch }) {
  const posts = await loadPosts({ fetch });

	const categories = await loadCategories({ fetch });
	return { categories, posts };
}

async function loadCategories({ fetch }): Promise<Array<string>> {
	const res = await fetch(`api/v${apiVer}/blog/categories`);
	const categories: Array<String> = await res.json();

	return categories;
}

async function loadPosts({ fetch }): Promise<Array<Post>> {
	const res = await fetch(`api/v${apiVer}/blog/posts`);
	const posts: Array<Post> = await res.json();

	return posts;
}
