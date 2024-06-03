import {NavLink} from "react-router-dom";

export default function Navigation() {
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
        <nav className="absolute -left-32">
            <ul className="w-32">
                {links.map(({path, label}) => (
                    <li key={label}>
                        <NavLink to={path}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
