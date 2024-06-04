export function InvitingPictures() {
    const pics = [
        {
            src: "/assets/images/restaurant.webp",
            alt: "Photo of the restaurant interior"
        },
        {
            src: "/assets/images/restaurant-chef.webp",
            alt: "Photo of the restaurant chef"
        },

    ]

    return (
        <div className="grid grid-cols-2 gap-4 my-6">
            {pics.map(({src, alt}) => (
                <img key={src} src={src} alt={alt}
                     className="aspect-[10/8] object-cover rounded"
                />
            ))}
        </div>
    )
}
