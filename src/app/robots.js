import { baseUrl } from "@/lib/config/siteConfig";

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}