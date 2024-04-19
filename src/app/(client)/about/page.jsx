import Hero from "@/components/shared/Hero";
import Awards from "./Awards";
import BehindTheScene from "./BehindTheScene";
import History from "./History";
import Overview from "./Overview";
import Team from "./Team";

export default function page() {
  return (
    <main>
      <Hero heading={<span>About <br /> Nahar Ayurvedic Pharmacy</span>} />
      <Overview />
      <History />
      <Team />
      <BehindTheScene />
      {/* <Awards /> */}
    </main>
  )
}
