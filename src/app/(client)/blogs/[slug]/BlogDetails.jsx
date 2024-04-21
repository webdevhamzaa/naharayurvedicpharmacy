import sanityService from '@/lib/sanityConfig'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

const myPortableTextComponents = {
    types: {
        image: ({ value }) =>
            <Image
                className="size-full object-cover object-center rounded-md overflow-hidden"
                width={1600}
                height={900}
                src={sanityService.getImageUrl(value).width(400).url() || "/images/common/error.png"}
                alt={""}
            />,
    },

    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <Link href={value.href} rel={rel}>
                    {children}
                </Link>
            )
        },
    },
}


export default function BlogDetails({ data: { id, title, content } }) {
    return (
        <section>
            <div className="">
                <article className='mx-auto prose'>
                    <h1 className="text-3xl">{title}</h1>
                    <PortableText
                        components={myPortableTextComponents}
                        value={content}
                    />
                </article>
            </div>
        </section>
    )
}
