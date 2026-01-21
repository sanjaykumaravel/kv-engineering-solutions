import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/' , '/admin/'], // Example disallows
    },
    sitemap: [
        'https://www.ksvengineering.com/sitemap.xml',
        'https://www.ksvengineering.com/image-sitemap.xml'
    ],
  };
}
