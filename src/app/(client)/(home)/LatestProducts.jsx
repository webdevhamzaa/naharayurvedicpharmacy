import LatestProductCard from "@/components/cards/LatestProductCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CheckCheck, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LatestProducts() {
    return (
        <section>
            <h2>Latest Released</h2>

            {/* Content */}
            <div className="mt-block relative grid gap-3xl md:grid-cols-2 transition-all border rounded-lg
             overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                    <Image
                        className="size-full aspect-squrare object-cover object-center"
                        width={400}
                        height={400}
                        src={"/images/common/5.jpg"}
                        alt="hero"
                    />
                </div>

                <div className="p-4">
                    <Badge>Category</Badge>
                    <div className="mt-base font-semibold group-hover:underline line-clamp-2">Product Name</div>
                    <p className="mt-xs text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, qui? Nulla eaque assumenda perspiciatis necessitatibus excepturi, sit dolor. Veniam rerum reiciendis eveniet cupiditate dolor aliquam. Eos consequatur atque quibusdam natus voluptas aliquam minima fuga nostrum veniam? Officia, repellat impedit, aspernatur atque est molestias possimus sequi deleniti consequatur praesentium modi eos minus voluptates tempora voluptate reprehenderit!</p>

                    <ul className="mt-base">
                        <li className="flex gap-2 items-center">
                            <CheckCheck className="size-5 text-primary" />
                            <div>Short Details</div>
                        </li>
                        <li className="flex gap-2 items-center">
                            <CheckCheck className="size-5 text-primary" />
                            <div>Short Details</div>
                        </li>
                        <li className="flex gap-2 items-center">
                            <CheckCheck className="size-5 text-primary" />
                            <div>Short Details</div>
                        </li>
                    </ul>

                    <div className="mt-base font-semibold">
                        Price
                    </div>

                    <Link className={`${buttonVariants({ variant: "outline" })} mt-base`} href="/">View More</Link>
                </div>
            </div>
        </section>
    )
}
