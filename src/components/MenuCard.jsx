export default function MenuCard({name, desc, price, image}) {
    return (
        <>
            <hr className="my-4 border md:hidden"/>
            <article className="w-full flex flex-row items-end md:flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between
                md:flex-wrap
                md:p-6
                ">
                    <header className="font-card-title">
                        {name}
                    </header>

                    <p className="my-3 pr-4 font-paragraph line-clamp-2 overflow-hidden text-ellipsis
                    md:line-clamp-none
                    md:order-last
                    ">
                        {desc}
                    </p>

                    <p className="font-paragraph-highlight md:text-brand-orange">
                        {price}
                    </p>
                </div>
                <img src={image} alt="A photo of the food"
                     className="object-cover rounded size-20
                         md:order-first
                         md:w-full
                         md:h-48
                         md:max-h-full
                         md:object-center
                         md:rounded-none
                         md:rounded-t-2xl
                         "
                />
            </article>
        </>
    )
}
