import type { Snippet } from "svelte"

export type Post = {
  title: string,
  date: string,
  slug: string,
  preview?: Array<string>,
  categories: Array<string>,
}
