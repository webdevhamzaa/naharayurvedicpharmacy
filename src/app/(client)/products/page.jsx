import Hero from "@/components/shared/Hero";
import Products from "./Products";
import { siteProductPageDescription, siteProductPageTitle } from "@/lib/config/siteConfig";

export const metadata = {
  title: siteProductPageTitle,
  description: siteProductPageDescription
}

export default function page() {
  return (
    <main className="header-space">
      <Hero heading="Our Products" />
      <Products />
    </main>
  )
}
