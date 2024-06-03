import {NavLink} from "react-router-dom";

export default function FooterNavigation() {
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
        <nav className="">
            <ul className="w-full">
                {links.map(({path, label}) => (
                    <li key={label}>
                        <NavLink to={path}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
