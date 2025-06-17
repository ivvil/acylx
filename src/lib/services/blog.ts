import { render } from "svelte/server";
import * as cheerio from 'cheerio';
import type { Post } from "$lib/types/Post.type";


export class Blog {
	public static async getPosts(): Promise<Array<Post>> {
		const paths = import.meta.glob('/src/blog/*.md', { eager: true });
		const posts: Array<Post> = [];

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split("/").at(-1)?.replace('.md', '');

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				// Render component to HTML
				const { body } = render(file.default);

				// Extract preview from HTML
				const preview = this.extractPreview(body);

				// Parse date components for proper sorting
				const [day, month, year] = file.metadata.date.split('/').map(Number);
				const date = new Date(year, month - 1, day).toISOString();

				const post: Post = {
					...file.metadata,
					slug,
					preview,
					date  // Use ISO date for consistency
				};

				posts.push(post);
			}
		}

		// Sort by date descending (newest first)
		posts.sort((a, b) =>
			new Date(b.date).getTime() - new Date(a.date).getTime()
		);

		return posts;
	}

	static extractPreview(html: string): Array<string> {
		const $ = cheerio.load(html);
		let markup: Array<string> = [];

		for (let i = 0; i < 2; i++) {
			let preview = $('p').slice(0, i + 1);

			markup.push($.html(preview))
		}

		return markup;
	}

	public static defaultCategories = ["Programming", "Music", "Photography"];
}
