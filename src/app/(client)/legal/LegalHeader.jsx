import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function LegalHeader() {
    return (
        <nav className="section py-6 md:p-4 w-full bg-primary">
            <ul className="flex-center flex-wrap gap-4">
                <li>
                    <Link className={buttonVariants({variant:"outline"})} href="/legal/privacy-policy">Privacy & Policy</Link>
                </li>
                <li>
                    <Link className={buttonVariants({variant:"outline"})} href="/legal/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                    <Link className={buttonVariants({variant:"outline"})} href="/legal/disclaimer">Disclaimer</Link>
                </li>
                <li>
                    <Link className={buttonVariants({variant:"outline"})} href="/legal/copyright-notice">Copyright Notice</Link>
                </li>
            </ul>
        </nav>
    )
}
