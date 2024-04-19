import { behindTheScene } from "@/lib/cms/about";

export default function BehindTheScene() {
  return (
    <section>
        <h2>Behind The Scene</h2>
        <p className="mx-auto md:w-2/3 md:text-center">At Nahar Ayurvedics, we take great pride in our manufacturing process, which upholds the highest standards of quality, purity, and efficacy. Our commitment to excellence begins with the careful selection of raw materials, sourced from trusted suppliers who share our dedication to sustainability and ethical practices.</p>

      {/* Content */}
      <div className="mt-block">
        {/* Details */}
        <div className="grid md:grid-cols-2 gap-base md:col-span-5">
          {behindTheScene.map(item => (
            <div className="p-4 bg-backgroundLight border rounded-md group" key={item.id}>
              <div className="text-muted-foreground/55 group-hover:text-primary font-bold font-lora text-2xl">
                # {item.phase}
                </div>
              <div className="my-base text-xl font-semibold">{item.title}</div>
              <p className="">{item.descriprion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
