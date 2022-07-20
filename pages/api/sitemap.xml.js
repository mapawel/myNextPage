import * as fs from 'fs';
import { projects } from 'assets/data/projects.js';
import { solutions } from 'assets/data/solutions.js';

export default async function handler(req, res) {
  const BASE_URL = 'https://www.devdefer.com';
  const defaultLocale = 'en';
  const locales = ['en', 'pl'];
  const localePaths = locales.map((locale) =>
    locale === defaultLocale ? '' : `/${locale}`
  );

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        '_app.js',
        '_document.js',
        '404.js',
        'sitemap.xml.js',
        'index.js',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${staticPagePath}`;
    });

  const projectsPaths = projects
    ?.map(({ slug }) => [`projects/${slug}`, `projects/${slug}/technicals`])
    .reduce((p, c) => `${p},${c}`)
    .split(',');

  const solutionsPaths = solutions
    ?.map(({ slug }) => [`solutions/${slug}`, `solutions/${slug}/movie`])
    .reduce((p, c) => `${p},${c}`)
    .split(',');

  const allPaths = [
    ...localePaths.map((loc) => BASE_URL + loc),
    ...staticPaths
      .map((path) => localePaths.map((loc) => `${BASE_URL}${loc}/${path}`))
      .reduce((p, c) => `${p},${c}`)
      .split(','),
    ...projectsPaths
      .map((path) => localePaths.map((loc) => `${BASE_URL}${loc}/${path}`))
      .reduce((p, c) => `${p},${c}`)
      .split(','),
    ...solutionsPaths
      .map((path) => localePaths.map((loc) => `${BASE_URL}${loc}/${path}`))
      .reduce((p, c) => `${p},${c}`)
      .split(','),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  return res.end();
}
