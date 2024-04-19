import BlogCard from "@/components/cards/BlogCard";

export default function Blogs() {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-base">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </section>
  )
}
