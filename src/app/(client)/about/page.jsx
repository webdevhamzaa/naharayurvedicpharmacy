import Hero from "@/components/shared/Hero";
import Awards from "./Awards";
import BehindTheScene from "./BehindTheScene";
import History from "./History";
import Overview from "./Overview";
import Team from "./Team";
import { siteAboutPageDescription, siteAboutPageTitle } from "@/lib/config/siteConfig";

export const metadata = {
  title: siteAboutPageTitle,
  description: siteAboutPageDescription
}

export default function page() {
  return (
    <main className="header-space">
      <Hero heading={<span>About <br /> Nahar Ayurvedic Pharmacy</span>} />
      <Overview />
      <History />
      <Team />
      <BehindTheScene />
      {/* <Awards /> */}
    </main>
  )
}
