import Hero from "@/components/shared/Hero";
import Blogs from "./Blogs";
import sanityService from "@/lib/sanityConfig";

export default async function page() {
  const blogs = await sanityService.getAllBlogs("", `{
    title, 
    excerpt, 
    "id": _id,
    "slug": slug.current, 
    "thumbnail":content[_type=="image"][0]
  }`);

  return (
    <main>
      <div className="mt-20 md:mt-0"></div>
      <Hero heading="Blogs" />
      <Blogs data={blogs} />
    </main>
  )
}
