"use server";

import { promises as fs } from "fs";
import path from "path";

export type NewsContentType = "paragraph" | "heading" | "bulletList";

export interface NewsContentItem {
  type: NewsContentType;
  text?: string;
  items?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
  authorImage: string;
  heroImage: string;
  cardImage: string;
  excerpt: string;
  content: NewsContentItem[];
  highlightsTitle?: string;
  highlights?: string[];
}

let newsCache: NewsItem[] | null = null;

export async function loadNews(): Promise<NewsItem[]> {
  if (newsCache) return newsCache;

  try {
    const filePath = path.join(process.cwd(), "public", "data", "news.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    newsCache = JSON.parse(fileContent) as NewsItem[];
    return newsCache;
  } catch (error) {
    console.error("Error loading news:", error);
    return [];
  }
}

export async function getAllNews(limit?: number): Promise<NewsItem[]> {
  const news = await loadNews();
  if (limit) return news.slice(0, limit);
  return news;
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  const news = await loadNews();
  return news.find((item) => item.id === id) ?? null;
}

export async function getNewsNavigation(currentId: string): Promise<{
  prev: NewsItem | null;
  next: NewsItem | null;
}> {
  const news = await loadNews();
  const index = news.findIndex((item) => item.id === currentId);

  return {
    prev: index > 0 ? news[index - 1] : null,
    next: index >= 0 && index < news.length - 1 ? news[index + 1] : null,
  };
}

export async function getRelatedNews(
  currentId: string,
  limit: number = 4
): Promise<NewsItem[]> {
  const news = await loadNews();
  return news.filter((item) => item.id !== currentId).slice(0, limit);
}
