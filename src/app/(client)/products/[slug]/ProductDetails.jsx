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
                {/* Ingredients */}
                <div className="flex items-center gap-2">
                    <Sprout className="inline size-4 text-muted-foreground shrink-0 self-start" />
                    <div className="text-sm">
                        <span className="text-muted-foreground font-semibold">Ingredients:</span>
                        <span>{ingredients}</span>
                    </div>
                </div>

                {/* Usage */}
                <div className="mt-1 flex items-center gap-2">
                    <BookText className="inline size-4 text-muted-foreground shrink-0 self-start" />
                    <div className="text-sm">
                        <span className="text-muted-foreground font-semibold">Usage:</span>
                        <span>{usage}</span>
                    </div>
                </div>

                {/* Available */}
                <div className="mt-base flex items-center gap-2">
                    <Package className="inline size-4 text-muted-foreground shrink-0 self-start" />
                    <div className="text-sm">
                        <span className="text-muted-foreground font-semibold">Available:</span>
                        <span>In stock {stock}pc</span>
                    </div>
                </div>

                {/* SKU */}
                <div className="mt-1 flex items-center gap-2">
                    <Hash className="inline size-4 text-muted-foreground shrink-0 self-start" />
                    <div className="text-sm">
                        <span className="text-muted-foreground font-semibold">SKU:</span>
                        <span>{SKU}</span>
                    </div>
                </div>
            </div>

            <div className="mt-base font-semibold text-primary text-lg">{price}</div>

            {/* Buttons */}
            <div className="mt-base flex gap-4">
                <Link className={buttonVariants()} href="#">
                    <Phone className="mr-2 size-4 inline" />Call to place order
                </Link>
            </div>
        </div>
    )
}
