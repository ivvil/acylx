import type { Snippet } from "svelte"

export type Post = {
  title: string,
  date: string,
  slug: string,
  draft: boolean,
  preview?: Array<string>,
  categories: Array<string>,
}
