"use server";

import { promises as fs } from "fs";
import path from "path";

export interface OngoingProject {
  id: string;
  name: string;
  subtitle: string;
  heroImage: string;
  mapAddress: string;
  intro: string[];
  features: string[];
}

let ongoingProjectsCache: OngoingProject[] | null = null;

export async function loadOngoingProjects(): Promise<OngoingProject[]> {
  if (ongoingProjectsCache) return ongoingProjectsCache;

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "ongoingProjects.json"
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    ongoingProjectsCache = JSON.parse(fileContent) as OngoingProject[];
    return ongoingProjectsCache;
  } catch (error) {
    console.error("Error loading ongoing projects:", error);
    return [];
  }
}

export async function getAllOngoingProjects(): Promise<OngoingProject[]> {
  const projects = await loadOngoingProjects();
  return projects;
}

export async function getOngoingProjectById(
  id: string
): Promise<OngoingProject | null> {
  const projects = await loadOngoingProjects();
  return projects.find((p) => p.id === id) ?? null;
}
