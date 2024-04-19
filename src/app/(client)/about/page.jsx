import Hero from "@/components/shared/Hero";
import Awards from "./Awards";
import BehindTheScene from "./BehindTheScene";
import History from "./History";
import Overview from "./Overview";
import Team from "./Team";

export default function page() {
  return (
    <main>
      <div className="mt-20 md:mt-0"></div>
      <Hero heading={<span>About <br /> Nahar Ayurvedic Pharmacy</span>} />
      <Overview />
      <History />
      <Team />
      <BehindTheScene />
      {/* <Awards /> */}
    </main>
  )
}
