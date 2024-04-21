import Hero from "@/components/shared/Hero";
import Blogs from "./Blogs";
import sanityService from "@/lib/sanityConfig";
import { siteBlogPageDescription, siteBlogPageTitle } from "@/lib/config/siteConfig";

export const metadata = {
  title: siteBlogPageTitle,
  description: siteBlogPageDescription
}

export default async function page() {
  const blogs = await sanityService.getAllBlogs("", `{
    title, 
    excerpt, 
    "id": _id,
    "slug": slug.current, 
    "thumbnail":content[_type=="image"][0]
  }`);

  return (
    <main className="header-space">
      <Hero heading="Blogs" />
      <Blogs data={blogs} />
    </main>
  )
}
