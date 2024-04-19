import BlogCard from "@/components/cards/BlogCard";
import sanityService from "@/lib/sanityConfig";

export default async function Blogs() {
    const blogs = await sanityService.getAllBlogs("", `{
        title, 
        excerpt, 
        "id": _id,
        "slug": slug.current, 
        "thumbnail":content[_type=="image"][0]
      }`);

    return (
        <section className="bg-muted">
            <h2>Blogs</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-base">
                {blogs.map(item => (
                    <BlogCard data={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}
