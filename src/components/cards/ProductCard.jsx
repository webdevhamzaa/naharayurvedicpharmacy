import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function ProductCard({ data: { id="id", name, benefits, category } }) {
    const imageNo = category && category === "medicine" ? 1 : category === "oil" ? 2 : 3
    return (
        <Link className="relative hover:bg-background border hover:-translate-y-1 rounded-md overflow-hidden transition-all group" href={`/products/${id || 1}`}>
            <div className="relative aspect-square overflow-hidden">
                <Image
                    className="size-full aspect-squrare object-cover object-center"
                    width={400}
                    height={400}
                    src={`/images/products/${imageNo || 1}.jpg`}
                    alt="hero"
                />
                <Badge className="absolute top-1 left-1 capitalize invisible group-hover:visible transition-all bg-backgroundLight text-green-800 rounded-sm">
                    {category || "category"}
                </Badge>
            </div>

            <div className="p-1 border-t">
                <div className="font-semibold text-sm md:-text-base group-hover:underline line-clamp-2">
                    {name || "Name"}
                </div>
                <p className="mt-xs text-xs line-clamp-3">
                    {benefits || "Benefits"}
                </p>
            </div>
        </Link>
    )
}
