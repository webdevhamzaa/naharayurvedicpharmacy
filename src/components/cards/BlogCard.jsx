import Image from "next/image";

export default function BlogCard() {
    return (
        <div className="relative hover:bg-background transition-all border rounded-md overflow-hidden group">
            <div className="aspect-video overflow-hidden">
                <Image
                    className="size-full aspect-video object-cover object-center"
                    width={400}
                    height={400}
                    src={"/images/common/4.jpg"}
                    alt="hero"
                />
            </div>

            <div className="p-4 border-t">
                <div className="font-semibold hover:text-primary hover:underline line-clamp-2">Blog Title</div>
                <p className="mt-xs text-sm line-clamp-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus consequuntur quam magni possimus voluptatibus et tenetur eius officia quasi aliquid! Tenetur, dolore recusandae tempora architecto sunt neque mollitia dicta minus.</p>
            </div>
        </div>
    )
}
