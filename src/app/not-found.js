import GoBackButton from '@/components/ui/GoBackButton'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main>
            <section className='header-space'>
                <div className='mx-auto w-full md:w-1/2 text-center grid place-items-center'>
                    <h1>404</h1>
                    <h2 className='mt-base'>Oops! Page Not Found</h2>
                    <p>The page you&apos;re looking for seems to have gone on a journey of its own.</p>

                    <div className='mt-base flex gap-2'>
                        <GoBackButton />
                        <Link className={`${buttonVariants({ variant: "outline" })} `} href="/">Return Home</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}