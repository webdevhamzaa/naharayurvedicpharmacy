import { products } from "@/lib/cms/product";
import { baseUrl } from "@/lib/config/siteConfig";
import sanityService from "@/lib/sanityConfig";

export default async function sitemap() {
    // Api request for multiple blog post
    const blogs = await sanityService.getAllBlogs("", `{
      "slug": slug.current, _updatedAt
    }`);

    const blogEntries = blogs.map(({slug, _updatedAt})=>({
      url: `${baseUrl}/blogs/${slug}`,
      updatedAt: new Date(_updatedAt)
    }))

    const productEntries = products.map(({id})=>({
      url: `${baseUrl}/products/${id}`
    }))


  return [
    {
      url:`${baseUrl}`
    },
    {
      url:`${baseUrl}/about`
    },
    {
      url:`${baseUrl}/blogs`
    },
    {
      url:`${baseUrl}/products`
    },
    {
      url:`${baseUrl}/about`
    },
    {
      url:`${baseUrl}/contact`
    },
    {
      url:`${baseUrl}/credits`
    },
    ...blogEntries,
    ...productEntries
  ]
} 