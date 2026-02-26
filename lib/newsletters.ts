import fs from "fs";
import path from "path";

const NEWSLETTERS_DIR = path.join(process.cwd(), "content", "newsletters");

export interface NewsletterMeta {
  title: string;
  date: string;
  summary: string;
  slug: string;
}

export interface Newsletter extends NewsletterMeta {
  content: string;
}

export function getAllNewsletters(): NewsletterMeta[] {
  const slugs = fs
    .readdirSync(NEWSLETTERS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const newsletters = slugs
    .map((slug) => {
      const metaPath = path.join(NEWSLETTERS_DIR, slug, "meta.json");
      if (!fs.existsSync(metaPath)) return null;
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      return { ...meta, slug } as NewsletterMeta;
    })
    .filter(Boolean) as NewsletterMeta[];

  return newsletters.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNewsletterBySlug(slug: string): Newsletter | null {
  const dir = path.join(NEWSLETTERS_DIR, slug);
  const metaPath = path.join(dir, "meta.json");
  const contentPath = path.join(dir, "content.html");

  if (!fs.existsSync(metaPath) || !fs.existsSync(contentPath)) return null;

  const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  const content = fs.readFileSync(contentPath, "utf-8");

  return { ...meta, slug, content };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(NEWSLETTERS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}
