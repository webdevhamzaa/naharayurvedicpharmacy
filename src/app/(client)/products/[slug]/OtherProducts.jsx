import ProductCard from "@/components/cards/ProductCard";
import { products } from "@/lib/cms/product";

export default function OtherProducts() {
  return (
    <section className="bg-backgroundLight">
        <h2>Other Products</h2>

        <div className="mt-block grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-xs md:gap-base">
                {products.slice(0,12).map(item=>(
                    <ProductCard data={item} key={item.id}/>
                ))}
            </div>
    </section>
  )
}
