import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import { siteContactPageDescription, siteContactPageTitle } from "@/lib/config/siteConfig";

export const metadata = {
    title: siteContactPageTitle,
    description: siteContactPageDescription
}

export default function page() {
    return (
        <main className="header-space">
            <Hero heading="Get In Touch" />
            <Contact />
        </main>
    );
}
