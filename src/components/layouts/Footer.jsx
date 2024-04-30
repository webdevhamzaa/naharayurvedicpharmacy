"use client"
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Ilogo } from "../svgs/svgs";
import { footerQuickLinks } from "@/lib/const";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  if (path.includes("/studio")) return null
  return (
    <footer className="border-t bg-backgroundLight">
      <div className="section md:py-8 lg:py-12 container">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & Media */}
          <div className="px-4 ">
            <div className="">
              <Link className="w-fit flex-center gap-2" href="/">
                <Image
                  className='size-14'
                  src="/images/logo/nahar-ayurvedic-pharmacy-logo.svg"
                  width={100}
                  height={100}
                  alt='Brand Logo'
                />
                <div className="font-lora text-lg font-bold leading-5">Nahar Ayurvedic <br /> Pharmacy</div>
              </Link>
              <p className="mt-1 text-sm">Explore a world of elegance. Discover the power of ancient wisdom and modern wellness with our range of Ayurvedic products and services.</p>
            </div>

            <div className="mt-base flex gap-2">
              <Link className="hover:text-primary rounded overflow-hidden" href="https://www.instagram.com/" target="_blank">
                <Instagram className="size-6" />
                <span className="sr-only">Instagram Link</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="px-4 self-start md:justify-self-center">
            <h2 className="text-lg font-normal">Quick Links</h2>
            <ul className="mt-2">
              {footerQuickLinks.map(item => (
                <li key={item.id}>
                  <Link className="leading-8 text-muted-foreground capitalize hover:text-primary hover:underline" href={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Address & Contact */}
          <div className="px-4">
            <h2 className="text-lg font-normal text-left">Contact & Address</h2>
            <div className="mt-2 space-y-2 flex flex-col gap-2">
              {/* location */}
              <div>
                <div>
                  <MapPin className="mr-1 size-4 inline" />
                  <span className="uppercase font-semibold text-xs text-primary tracking-wide">Location</span>
                </div>
                <address className="mt-px block text-muted-foreground text-base">
                  <Link className="mt-px block text-muted-foreground text-base hover:underline hover:text-primary" href="https://maps.app.goo.gl/kDb522mFUSgCGrZY6" target="_blank">
                    near trinity english school, Maroli, Gujarat 396436
                  </Link>
                </address>
              </div>

              {/* Email */}
              <div>
                <div>
                  <Mail className="mr-1 size-4 inline" />
                  <span className="uppercase font-semibold text-xs text-primary tracking-wide">Email</span>
                </div>
                <Link className="mt-px block text-muted-foreground text-base hover:underline hover:text-primary" href="mailto:info@bugbusters.com">info@blossomgarder.com</Link>
              </div>
              {/* Phone */}
              <div>
                <div>
                  <Phone className="mr-1 size-4 inline" />
                  <span className="uppercase font-semibold text-xs text-primary tracking-wide">Phone No.</span>
                </div>
                <Link className="mt-px block text-muted-foreground text-base hover:underline hover:text-primary" href="tel:+123412341234">+1234 1234 1234</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <p className="py-block text-muted-foreground text-sm text-center border-t">
        &copy;Copyright-2024 / 
        <Link className="hover:underline" href="/credits"> Credits </Link> / 
        <Link className="hover:underline" href="/legal"> Legal </Link>
         / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/" target="_blank"> webdevsalmann</Link> 💖
      </p>
    </footer>
  )
}
