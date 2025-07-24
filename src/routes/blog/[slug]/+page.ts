import { error } from "@sveltejs/kit";

export async function load({ params }) {
	try {
	  const post = await import(`../../../blog/${params.slug}.md`);

	  return {
		content: post.default,
		meta: post.metadata,
	  }
	} catch (err) {
		error(404, `Could not find ${params.slug}`)
	}
}

export const prerender = true;
