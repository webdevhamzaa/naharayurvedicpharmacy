import BlogCard from "@/components/cards/BlogCard";

export default function Blogs({data}) {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-base">
      {data.map(item=>(
        <BlogCard data={item} key={item.id} />
      ))}
    </section>
  )
}
