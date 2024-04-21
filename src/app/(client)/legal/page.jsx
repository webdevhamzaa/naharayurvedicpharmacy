"use client"
import Hero from "@/components/shared/Hero"
import { usePathname, useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  const path = usePathname()
  if (path === "/legal") return router.push("/legal/privacy-policy")
  return (
    <>
      <Hero heading="Legal" paragraph="Please visit above links to read our legal and documentation" />
    </>
  )
}
