import { benefitParagraph, benefitsLists } from "@/lib/cms/hero";
import Image from "next/image";

export default function Benefits() {
    return (
        <section className="bg-backgroundLight">
            <h2>Benefits of Ayurveda</h2>

            {/* content */}
            <div className="mt-block grid md:grid-cols-2 gap-3xl">
                {/* Images */}
                <div>
                    <Image
                        className="object-cover object-center rounded-md"
                        width={320}
                        height={180}
                        src="/images/common/3.jpg"
                        alt="Ayurvedic titurants"
                        loading="eager"
                    />
                </div>

                {/* Information */}
                <div>
                    <p>{benefitParagraph}</p>
                    <ul className="mt-base">
                        {benefitsLists.map(item => (
                            <li className="mt-sm" key={item.id}>
                                <span className="font-semibold">{item.title}: </span>
                                <span> {item.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}
