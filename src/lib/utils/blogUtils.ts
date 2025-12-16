'use server';

import { promises as fs } from "fs";
import path from "path";

export interface BlogContent {
  type: "paragraph" | "heading" | "bulletList";
  text?: string;
  items?: string[];
}

export interface BlogMetadata {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  image: string;
  date: {
    month: string;
    day: string;
    year: number;
  };
  author: string;
  authorImage: string;
  category: string;
  content: BlogContent[];
  tags: string[];
  readTime: number;
}

let blogsCache: BlogMetadata[] | null = null;

export async function loadBlogs(): Promise<BlogMetadata[]> {
  if (blogsCache !== null) {
    return blogsCache;
  }

  try {
    const filePath = path.join(process.cwd(), "public/data/blogs.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    blogsCache = JSON.parse(fileContent);
    return blogsCache!;
  } catch (error) {
    console.error("Error loading blogs:", error);
    return [];
  }
}

export async function getBlogById(id: string): Promise<BlogMetadata | null> {
  const blogs = await loadBlogs();
  return blogs.find((blog) => blog.id === id) || null;
}

export async function getAllBlogs(
  category?: string,
  limit?: number
): Promise<BlogMetadata[]> {
  let blogs = await loadBlogs();

  if (category) {
    blogs = blogs.filter((blog) => blog.category === category);
  }

  if (limit) {
    blogs = blogs.slice(0, limit);
  }

  return blogs;
}

export async function getRecentBlogs(limit: number = 6): Promise<BlogMetadata[]> {
  const blogs = await loadBlogs();
  return blogs.slice(0, limit);
}

export async function getRelatedBlogs(
  currentBlogId: string,
  limit: number = 3
): Promise<BlogMetadata[]> {
  const blogs = await loadBlogs();
  const currentBlog = blogs.find((blog) => blog.id === currentBlogId);

  if (!currentBlog) {
    return [];
  }

  const related = blogs
    .filter((blog) => blog.category === currentBlog.category && blog.id !== currentBlogId)
    .slice(0, limit);

  if (related.length < limit) {
    const additionalBlogs = blogs
      .filter(
        (blog) =>
          blog.id !== currentBlogId &&
          !related.find((r) => r.id === blog.id) &&
          blog.tags.some((tag) => currentBlog.tags.includes(tag))
      )
      .slice(0, limit - related.length);

    return [...related, ...additionalBlogs];
  }

  return related;
}

export async function getBlogNavigation(
  currentBlogId: string
): Promise<{
  prev: BlogMetadata | null;
  next: BlogMetadata | null;
}> {
  const blogs = await loadBlogs();
  const currentIndex = blogs.findIndex((blog) => blog.id === currentBlogId);

  return {
    prev: currentIndex > 0 ? blogs[currentIndex - 1] : null,
    next: currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null,
  };
}

export async function getBlogsByCategory(category: string): Promise<BlogMetadata[]> {
  const blogs = await loadBlogs();
  return blogs.filter((blog) => blog.category === category);
}

export async function getAllCategories(): Promise<string[]> {
  const blogs = await loadBlogs();
  const categories = new Set(blogs.map((blog) => blog.category));
  return Array.from(categories);
}