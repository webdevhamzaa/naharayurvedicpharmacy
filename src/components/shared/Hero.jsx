import Image from "next/image";

export default function Hero({ heading, imageUrl }) {
    return (
        <>
            <section className="header-space">
                <div className="relative mx-auto md:w-2/3 md:text-center flex-center flex-col z-10">
                    <h1 className="drop-shadow-xl shadow-foreground">{heading || "Heading"}</h1>
                </div>

                <div className="absolute inset-0 size-full -z-10">
                    <Image
                        className="size-full object-cover object-center"
                        width={1600}
                        height={900}
                        src={imageUrl || "/images/common/2.png"}
                        alt="hero"
                    />
                </div>
            </section>
        </>
    )
}
