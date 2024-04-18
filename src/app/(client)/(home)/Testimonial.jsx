import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/cms/hero";

export default function Testimonial() {
  return (
    <section className="bg-backgroundLight">
      <h2>What Our Users Says</h2>

      <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 gap-base">
        {testimonials.map(item => (
          <TestimonialCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
