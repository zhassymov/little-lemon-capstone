import {NavLink} from "react-router-dom";

export default function Navigation({hidden, toggle}) {
    const links = [
        {
            path: "/",
            label: "Home",
        },
        {
            path: "/#",
            label: "About",
        },
        {
            path: "/#",
            label: "Menu",
        },
        {
            path: "/booking",
            label: "Reservations",
        },
        {
            path: "/#",
            label: "Order Online",
        },
        {
            path: "/#",
            label: "Login",
        },
    ];
    return (
        <nav
            className={`
                absolute top-0 left-0
                w-full
                p-4
                md:p-0
                bg-white
                
                md:relative
                md:block
                
                font-card-title
                md:text-base
                md:font-medium
                
                
                ${hidden ? "hidden" : "z-10"}
                `}
        >

            <ul className="
                    grid gap-1
                    md:flex
                    md:justify-end
                    "
            >
                <li
                    key="close"
                    className="p-4 md:hidden"
                >
                    <button
                        onClick={() => toggle()}
                        className="p-2 md:p-0">&times;</button>
                </li>
                {links.map(({path, label}) => (
                    <li key={label}>
                        <NavLink
                            onClick={() => toggle()}
                            className="
                                block
                                w-full p-2
                                rounded-md
                                transition-all
                                focus:bg-brand-yellow
                                hover:bg-brand-yellow
                                active:bg-brand-yellow
                                "
                            to={path}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
