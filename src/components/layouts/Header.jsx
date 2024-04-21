"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
import { navigationLinks } from '@/lib/const';
import Image from 'next/image';

export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  if (path.includes("/studio")) return null
  return (
    <header className={`fixed  top-0 md:relative px-0 w-full bg-background md:border-none z-[9999] shadow-md md:shadow-sm ${isNavbarOpen ? "border-b" : "border-none"}`}>
      <nav className="px-[5%] py-4 w-full grid grid-cols-4 justify-center items-center">

        {/* Logo */}
        <Link className="w-fit flex-center gap-2 col-span-3" href="/">
          <Image
            className='size-14'
            src="/images/logo/nahar-ayurvedic-pharmacy-logo.svg"
            width={100}
            height={100}
            alt='Brand Logo'
          />
          <div className="font-lora text-lg font-bold leading-5">Nahar Ayurvedic <br /> Pharmacy</div>
        </Link>

        {/* Hamburger menu */}
        <div className="size-8 flex-center md:hidden justify-self-end col-span-1"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        {/* Links */}
        <ul className={`relative py-4 md:py-0 w-full md:w-fit flex-center flex-col gap-4   md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'} col-span-4 md:col-span-1`}>
          {
            navigationLinks.map((item) => (
              <li key={item.title}>
                <Link className={`${buttonVariants({ variant: item.varient, size: 'sm' })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`} href={item.path}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
