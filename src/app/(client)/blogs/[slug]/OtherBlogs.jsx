import BlogCard from "@/components/cards/BlogCard";

export default function OtherBlogs({ data }) {
    return (
        <section className="bg-backgroundLight">
            <h2>Other Blogs</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-base">
                {data.map(item => (
                    <BlogCard data={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}
