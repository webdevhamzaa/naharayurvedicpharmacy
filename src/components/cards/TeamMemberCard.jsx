import Image from "next/image";

export default function TeamMemberCard({ data: { imageUrl, name, position } }) {
    return (
        <div className="p-4 relative hover:bg-background text-center border rounded overflow-hidden transition-all group">
            <div className="w-full flex-center rounded-full overflow-hidden">
                <Image
                    className=" size-40 object-cover object-center rounded-full overflow-hidden"
                    width={200}
                    height={200}
                    src={imageUrl}
                    alt="hero"
                />
            </div>

            <div className="mt-base font-semibold group-hover:underline line-clamp-2">{name}</div>
            <p className="text-sm font-lora">{position}</p>
        </div>
    )
}
