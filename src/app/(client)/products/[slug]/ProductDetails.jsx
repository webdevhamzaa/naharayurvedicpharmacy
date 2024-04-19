import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { BookText, Hash, Package, Phone, Sprout } from "lucide-react";
import Link from "next/link";

export default function ProductDetails({ className, data: { category, name, description, benefits, ingredients, usage, price, SKU, stock } }) {
    return (
        <div className={`${className}`}>
            <Badge className="uppercase">{category}</Badge>
            <h1 className="mt-base mb-0 font-bold text-3xl">{name}</h1>
            <p className="mt-2 text-foreground">{benefits}</p>
            <p className="mt-base text-sm">{description}</p>

            {/* More Details */}
            <div className="mt-base">
                <div className="flex items-center gap-2">
                    <Sprout className="inline size-4 text-muted-foreground shrink-0 self-start" />
                    <div className="text-sm">
                        <span className="text-muted-foreground font-semibold">Ingredients: </span>
                        <span>{ingredients}</span>
                    </div>
                </div>

                <div className="mt-1 flex items-center gap-2">
                    <BookText className="inline size-4 text-muted-foreground shrink-0 self-start" />
                    <div className="text-sm">
                        <span className="text-muted-foreground font-semibold">Usage: </span>
                        <span>{usage}</span>
                    </div>
                </div>

                <div className="mt-base flex items-center gap-2">
                    <Package className="inline size-4 text-muted-foreground shrink-0 self-start" />
                    <div className="text-sm">
                        <span className="text-muted-foreground font-semibold">Available: </span>
                        <span>In stock {stock}pc</span>
                    </div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                    <Hash className="inline size-4 text-muted-foreground" />
                    <shrink-0span className="text-muted-foreground font-semibold"> self-startSKU: </shrink-0span>
                    <div className="text-sm">
                        <span>{SKU}</span>
                    </div>
                </div>
            </div>

            <div className="mt-base font-semibold text-primary text-lg">₹{price}</div>

            {/* More Details */}
            {/* <div className="mt-base">
                <div>
                    <div className="">Size</div>
                    <div className="mt-2 w-fit divide-x rounded-md overflow-hidden border">
                        {sizes?.map(item => (
                            <div
                                className="py-2 px-4 inline-block cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted"
                                key={item + name}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-base">
                    <div className="">Colors</div>
                    <div className="mt-2 w-fit divide-x rounded-md overflow-hidden border">
                        {colors?.map(item => (
                            <div
                                className="py-2 px-4 inline-block cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted"
                                key={item + name}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Buttons */}
            <div className="mt-base flex gap-4">
                <Link className={buttonVariants()} href="#">
                    <Phone className="mr-2 size-4 inline" />Call to place order
                </Link>
            </div>
        </div>
    )
}
