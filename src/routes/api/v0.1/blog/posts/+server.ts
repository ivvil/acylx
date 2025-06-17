

import { Blog } from "$lib/services/blog";
import { json } from "@sveltejs/kit";

export async function GET() {
	const posts = await Blog.getPosts();
	return json(posts);

}
