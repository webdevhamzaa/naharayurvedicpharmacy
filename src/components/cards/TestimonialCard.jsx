import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard({ data: { testimonialBy, testimonial } }) {
    return (
        <div className="relative p-4 bg-background border rounded-md overflow-hidden transition-all group">
            <Image
                className="size-8"
                src="/images/svgs/quotation-mark.svg"
                width={200}
                height={200}
                alt="quotation"
            />
            <div className="mt-base flex gap-4">
                <div className="font-semibold ">{testimonialBy}</div>
                {/* Stars */}
                <div className="flex gap-1 items-center text-green-600">
                    <Image
                        className="size-4"
                        src="/images/svgs/star.svg"
                        width={20}
                        height={20}
                        alt="star"
                    />
                    <Image
                        className="size-4"
                        src="/images/svgs/star.svg"
                        width={20}
                        height={20}
                        alt="star"
                    />
                    <Image
                        className="size-4"
                        src="/images/svgs/star.svg"
                        width={20}
                        height={20}
                        alt="star"
                    />
                    <Image
                        className="size-4"
                        src="/images/svgs/star.svg"
                        width={20}
                        height={20}
                        alt="star"
                    />
                    <Image
                        className="size-4"
                        src="/images/svgs/star.svg"
                        width={20}
                        height={20}
                        alt="star"
                    />
                </div>
            </div>
            <p className="mt-xs text-sm">{testimonial}</p>
        </div>
    )
}
