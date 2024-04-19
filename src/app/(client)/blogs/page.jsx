import Hero from "@/components/shared/Hero";
import Blogs from "./Blogs";

export default async function page() {
  return (
    <main>
      <Hero heading="Blogs" />
      <Blogs />
    </main>
  )
}
