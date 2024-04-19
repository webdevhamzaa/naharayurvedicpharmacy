import Form from "./Form";

export default function Contact({ className, title, subTitle }) {
    return (
        <section className={`${className} min-h-[40rem] grid md:grid-cols-2 gap-block`}>
            {/* Details */}
            <div className="w-full">
                <div className="text-center">
                    <h2 className="mb-2">{title || 'Contact Us Anytime'}</h2>
                    <p className="">{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
                </div>
                <Form />
            </div>

            <div className="size-full aspect-square">
                <iframe className="size-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1010247473764!2d72.88948097433426!3d21.028643380620636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be057ca14ef9443%3A0x392225f85c2145e8!2sNahar%20Ayurvedic%20Pharmacy!5e0!3m2!1sen!2sin!4v1713439178950!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
