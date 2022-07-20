import { projects } from 'assets/data/projects.js';
import { solutions } from 'assets/data/solutions.js';
import routes from 'routes';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res, defaultLocale, locales }) => {
  const BASE_URL = 'https://www.devdefer.com';

  const localePaths = locales.map((locale) =>
    locale === defaultLocale ? '' : `/${locale}`
  );

  const staticPaths = routes.map(({ path }) => (path === '/' ? '' : path));

  const projectsPaths = projects
    ?.map(({ slug }) => [`/projects/${slug}`, `/projects/${slug}/technicals`])
    .reduce((p, c) => `${p},${c}`)
    .split(',');

  const solutionsPaths = solutions
    ?.map(({ slug }) => [`/solutions/${slug}`, `/solutions/${slug}/movie`])
    .reduce((p, c) => `${p},${c}`)
    .split(',');

  const allPaths = [
    ...staticPaths
      .map((path) => localePaths.map((loc) => `${BASE_URL}${loc}${path}`))
      .reduce((p, c) => `${p},${c}`)
      .split(','),
    ...projectsPaths
      .map((path) => localePaths.map((loc) => `${BASE_URL}${loc}${path}`))
      .reduce((p, c) => `${p},${c}`)
      .split(','),
    ...solutionsPaths
      .map((path) => localePaths.map((loc) => `${BASE_URL}${loc}${path}`))
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
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
