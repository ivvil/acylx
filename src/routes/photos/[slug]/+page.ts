import { error } from "@sveltejs/kit";

export const prerender = true;

export async function load({ params }) {
	try {
		const album = await import(`../../../photos/${params.slug}/index.md`);

	  
	} catch (err) {
		error(404, `Could not fubd ${params.slug}`)
	}
}
