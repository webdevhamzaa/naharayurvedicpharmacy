import sanityService from "@/lib/sanityConfig";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data: { thumbnail, title, slug, excerpt } }) {
    return (
        <div className="relative hover:bg-background transition-all border rounded-md overflow-hidden group">
            <div className="aspect-video overflow-hidden">
                <Image
                    className="size-full aspect-video object-cover object-center"
                    width={400}
                    height={400}
                    src={sanityService.getImageUrl(thumbnail).width(400).url() ||"/images/common/error.png"}
                    alt="hero"
                />
            </div>

            <div className="p-4 border-t">
                <Link className="font-semibold line-clamp-2 hover:text-primary hover:underline" href={`/blogs/${slug}`}>
                    {title}
                </Link>
                <p className="mt-xs text-sm line-clamp-2">{excerpt}</p>
            </div>
        </div>
    )
}
