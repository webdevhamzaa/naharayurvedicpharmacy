import Image from "next/image";
import ProductDetails from "./ProductDetails";
import { products } from "@/lib/cms/product";
import sanityService from "@/lib/sanityConfig";
import OtherProducts from "./OtherProducts";

export default async function page({ params:{slug} }) {
  const productData = products.find(item => item.id === slug)
  const imageNo = productData.category && productData.category === "medicine" ? 1 : productData.category === "oil" ? 2 : 3

  return (
    <main>
      <section className="mt-block grid gap-block md:grid-cols-7">
        {/* Image Gallery */}
        <div className="grid aspect-[4/4.5] rounded border overflow-hidden md:col-span-3">
          <Image
            className="size-full aspect-[4/4.5] object-cover"
            src={`/images/products/${imageNo || 1}.jpg`}
            width={800}
            height={900}
            alt={`${"name"} image`}
          />
        </div>

        {/* Product Details */}
        <ProductDetails className="md:col-span-4" data={productData} />
      </section>

      <OtherProducts />
    </main>
  )
}
