import ProductCard from "@/components/cards/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/lib/cms/product";
import Link from "next/link";

export default function Featured() {
    return (
        <section>
            <h2>Our Featured Products</h2>

            <div className="mt-block grid gap-base md:grid-cols-3">
                {products.slice(0,3).map(item => (
                    <ProductCard data={item} key={item.id} />
                ))}
            </div>

            <div className="flex-center">
                <Link className={`${buttonVariants({ variant: "secondary" })} mt-base`} href="/">
                    View More
                </Link>
            </div>
        </section>
    )
}
