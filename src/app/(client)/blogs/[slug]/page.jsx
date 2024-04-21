import sanityService from "@/lib/sanityConfig";
import BlogDetails from "./BlogDetails";
import OtherBlogs from "./OtherBlogs";
import { notFound } from "next/navigation";

// Catching routes for static renders
export async function generateStaticParams() {
  const blogs = await sanityService.getAllBlogs("", `{
    "slug": slug.current,
  }`);
  return blogs.map(({ slug }) => slug).slice(0, 5)
}

// Generate Metadata for dynamic pages
export async function generateMetadata({ params: { slug } }) {
  const blogData = await sanityService.getBlogsBySlug(slug, `[0]{
    title, excerpt,"thumbnail":content[_type=="image"][0]
  }`);

  if (!blogData) return
  return {
    title: `${blogData.title}, a blog by`,
    description: blogData.excerpt,
    openGraph: {
      images: [
        {
          url: sanityService.getImageUrl(blogData.thumbnail).url()
        }
      ]
    }
  }
}

export default async function page({ params: { slug } }) {
  // Api request for single blog post
  const blogData = await sanityService.getBlogsBySlug(slug, `[0]{
      title, excerpt,
      "id": _id,
      "slug": slug.current, 
      content
    }`);

  // Api request for multiple blog post
  const blogs = await sanityService.getAllBlogs("", `{
        title, 
        excerpt, 
        "id": _id,
        "slug": slug.current, 
        "thumbnail":content[_type=="image"][0]
      }`);

  if (!blogData) notFound()

    return (
      <main className="header-space">
        <BlogDetails data={blogData} />
        <OtherBlogs data={blogs} />
      </main>
    )
}
