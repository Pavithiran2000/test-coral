"use server";

import { promises as fs } from "fs";
import path from "path";

export interface CompletedProject {
  id: string;
  name: string;
  image: string;
  address: string;
  heroImage: string;
  mapAddress?: string;
  lead: string[];
  features: string[];
  gallery: string[];
}

let completedProjectsCache: CompletedProject[] | null = null;

export async function loadCompletedProjects(): Promise<CompletedProject[]> {
  if (completedProjectsCache) return completedProjectsCache;

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "completedProjects.json"
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    completedProjectsCache = JSON.parse(fileContent) as CompletedProject[];
    return completedProjectsCache;
  } catch (error) {
    console.error("Error loading completed projects:", error);
    return [];
  }
}

export async function getAllCompletedProjects(): Promise<CompletedProject[]> {
  const projects = await loadCompletedProjects();
  return projects;
}

export async function getCompletedProjectById(
  id: string
): Promise<CompletedProject | null> {
  const projects = await loadCompletedProjects();
  return projects.find((p) => p.id === id) ?? null;
}
