import { overView } from "@/lib/cms/about";
import Image from "next/image";

export default function Overview() {
    return (
        <section>
            <h2>Overview</h2>

            <div className="mt-block grid md:grid-cols-2 items-center gap-3xl">
                {/* Images */}
                <div>
                    <Image
                        className="object-cover w-full object-center rounded-md"
                        width={320}
                        height={180}
                        src="/images/common/8.jpg"
                        alt="hero"
                    />
                </div>

                {/* Details */}
                <div className="">
                    {overView.map(item => (
                        <div className="mt-base" key={item.id}>
                            {item.descriprion}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
