import Image from "next/image";
import ProductDetails from "./ProductDetails";
import { products } from "@/lib/cms/product";
import sanityService from "@/lib/sanityConfig";
import OtherProducts from "./OtherProducts";
import { notFound } from "next/navigation";


// Catching routes for static renders
export async function generateStaticParams() {
  return products.map(({ id }) => id).slice(0, 20)
}

// Generate Metadata for dynamic pages
export async function generateMetadata({ params: { slug } }) {
  const productData = products.find(item => item.id === slug)
  const imageNo = productData.category && productData.category === "medicine" ? 1 : productData.category === "oil" ? 2 : 3
  if (!productData) return
  return {
    title: `${productData.name} of`,
    description: productData.description,
    openGraph: {
      images: [
        {
          url: `/images/products/${imageNo || 1}.jpg`
        }
      ]
    }
  }
}

export default async function page({ params: { slug } }) {
  const productData = products.find(item => item.id === slug)
  const imageNo = productData.category && productData.category === "medicine" ? 1 : productData.category === "oil" ? 2 : 3


  if (!productData) notFound()

  return (
    <main className="header-space">
      <section className="grid gap-block md:grid-cols-7">
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
