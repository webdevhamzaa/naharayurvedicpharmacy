"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
import { navigationLinks } from '@/lib/const';

export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className={`container px-0 w-full bg-background md:border-none ${isNavbarOpen ? "border-b" : "border-none"}`}>
      <nav className="px-[5%] py-4 w-full grid grid-cols-2 justify-center items-center">

        {/* Logo */}
        <Link className="w-fit flex-center" href="/">
          <Ilogo className="size-14" />
        </Link>

        {/* Hamburger menu */}
        <div className="size-8 flex-center md:hidden justify-self-end"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        {/* Links */}
        <ul className={`relative py-4 md:py-0 w-full md:w-fit flex-center flex-col gap-4   md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'} col-span-2 md:col-span-1`}>
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
