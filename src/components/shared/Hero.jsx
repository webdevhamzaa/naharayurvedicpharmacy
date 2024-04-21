import Image from "next/image";

export default function Hero({ heading, paragraph, imageUrl }) {
    return (
        <>
            <section>
                <div className="relative mx-auto md:w-2/3 text-center flex-center flex-col z-10">
                    <h1 className="drop-shadow-xl shadow-foreground">{heading || "Heading"}</h1>
                    {paragraph && <p className="mt-base text-xl text-foreground">{paragraph}</p>}
                </div>

                <div className="absolute inset-0 size-full -z-10">
                    <Image
                        className="size-full object-cover object-center"
                        width={800}
                        height={450}
                        src={"/images/common/2.jpg"}
                        alt="Page Banner Image"
                    />
                </div>
            </section>
        </>
    )
}
