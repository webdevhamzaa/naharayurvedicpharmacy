import { history } from "@/lib/cms/about";
import Image from "next/image";

export default function History() {
    return (
        <section className="bg-backgroundLight">
            <h2>History</h2>

            {/* Content */}
            <div className="mt-block grid md:grid-cols-8 items-center gap-3xl">
                {/* Images */}
                <div className="md:col-span-3 lg:col-span-2 md:order-2">
                    <Image
                        className="object-cover object-center rounded-md"
                        width={600}
                        height={800}
                        src="/images/team/mohan-nahar.png"
                        alt="hero"
                    />
                    <div className="mt-base text-center font-semibold italic">~Mohan Nahar</div>
                </div>

                {/* Details */}
                <div className="md:col-span-5 lg:col-span-6 md:order-1">
                    {history.map(item => (
                        <div className="mt-base md:mt-0" key={item.id}>
                            {item.descriprion}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
