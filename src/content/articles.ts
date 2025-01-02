import fs from 'fs';
import path from 'path';

export interface Article {
  slug: string;
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  readingTime: string;
}

function getArticlesFromFiles(): Article[] {
  const articlesDir = path.join(process.cwd(), 'src', 'content', 'articles');
  
  try {
    // Get all HTML files in the articles directory
    const files = fs.readdirSync(articlesDir)
      .filter(file => file.endsWith('.html'));

    // Read and parse each file
    return files.map(file => {
      const content = fs.readFileSync(path.join(articlesDir, file), 'utf8');
      // Create slug from filename: remove .html and replace spaces with hyphens
      const slug = file.replace('.html', '').replace(/\s+/g, '-');
      
      // Extract metadata from HTML comments - more flexible pattern
      const metadataMatch = content.match(/<!--METADATA\s*([\s\S]*?)\s*-->/);
      if (!metadataMatch) {
        throw new Error(`No metadata found in article: ${file}`);
      }

      try {
        const metadata = JSON.parse(metadataMatch[1]);
        return {
          slug,
          ...metadata
        };
      } catch (error: any) {
        throw new Error(`Invalid metadata JSON in article: ${file}. Error: ${error.message}`);
      }
    });
  } catch (error) {
    console.error('Error reading articles:', error);
    return [];
  }
}

export const articles: Article[] = getArticlesFromFiles(); 