import sanityService from "@/lib/sanityConfig";
import BlogDetails from "./BlogDetails";
import OtherBlogs from "./OtherBlogs";

export default async function page({ params: { slug } }) {
    const blogData = await sanityService.getBlogsBySlug(slug, `[0]{
      title, 
      "id": _id,
      "slug": slug.current, 
      content
    }`);

    const blogs = await sanityService.getAllBlogs("", `{
        title, 
        excerpt, 
        "id": _id,
        "slug": slug.current, 
        "thumbnail":content[_type=="image"][0]
      }`);

    return (
        <main>
            <BlogDetails data={blogData} />
            <OtherBlogs data={blogs} />
        </main>
    )
}
