import {Link} from "react-router-dom";
import Container from "../ui/Container";

export default function MenuCategories() {
    const links = [
        {
            path: "/#",
            label: "Lunch",
        },
        {
            path: "/#",
            label: "Mains",
        },
        {
            path: "/#",
            label: "Desserts",
        },
        {
            path: "/#",
            label: "A La Carte",
        },
        {
            path: "/#",
            label: "Specials",
        },
    ]

    return (
        <Container>
            <div className="mt-2 md:mt-24">
                <h2 className="font-section-title">Order for delivery!</h2>
                <ul className="
            mt-3
            w-full whitespace-nowrap overflow-x-scroll no-scrollbar scroll-smooth
            grid grid-flow-col max-w-min grid-rows-[auto] gap-2.5
            ">
                    {links.map(({path, label}) => (
                        <li key={label}>
                            <Link
                                className="block mx-auto px-3 py-2 rounded-full bg-brand-lightgray text-black
                            hover:bg-brand-green hover:text-white active:bg-brand-green active:text-white
                            font-paragraph-highlight"
                                to={path}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

