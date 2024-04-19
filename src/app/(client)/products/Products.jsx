"use client"
import ProductCard from "@/components/cards/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/cms/product";
import { useState } from "react";

export default function Products() {
    const [displayProduct, setDisplayProduct] = useState(products);

    const filterProduct = (category) => {
        if (category == "all") {
            setDisplayProduct(products)
        } else {
            const filteredProducts = products.filter(item => item.category === category)
            setDisplayProduct(filteredProducts)
        }
    }


    return (
        <section>
            {/* Filter Products */}
            <div className="flex-center gap-base flex-wrap">
                <Button variant="outline" onClick={() => filterProduct("all")}>All</Button>
                <Button variant="outline" onClick={() => filterProduct("medicine")}>Medicines</Button>
                <Button variant="outline" onClick={() => filterProduct("oil")}>Oils</Button>
                <Button variant="outline" onClick={() => filterProduct("powder")}>Powders</Button>
            </div>

            {/* Products Grid */}
            <div className="mt-block grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-xs md:gap-base">
                {displayProduct.map(item => (
                    <ProductCard data={item} key={item.id} />
                ))}
            </div>

        </section>
    )
}
