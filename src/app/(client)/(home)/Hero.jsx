import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="header-space">
            <div className="relative mx-auto md:w-2/3 md:text-center flex-center flex-col z-10">
                <h1 className="drop-shadow-xl shadow-foreground">We sell Ayurvedic Medicines</h1>
                <p className="mt-base text-foreground text-lg">Discover the power of ancient wisdom and modern wellness with our range of Ayurvedic products and services.</p>
                <Link className={`${buttonVariants()} mt-base`} href="/products">Explore Products</Link>
            </div>
            
            <div className="absolute inset-0 size-full -z-10">
                <Image
                    className="size-full object-cover object-center"
                    width={1600}
                    height={900}
                    src="/images/common/2.jpg"
                    alt="hero"
                />
            </div>
        </section>
    )
}
