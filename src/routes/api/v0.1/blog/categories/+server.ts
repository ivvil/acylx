

import { Blog } from "$lib/services/blog";
import { json } from "@sveltejs/kit";

export async function GET() {
  const posts = await Blog.getPosts();
  
  // Extract and flatten categories, then filter out any undefined/null
  const allCategories = posts.flatMap(post => 
    post.categories || []  // Handle posts without categories
  );
  
  // Create a Set to get unique categories
  const uniqueCategories = [...new Set(allCategories)];
  
  return json(uniqueCategories);
}
