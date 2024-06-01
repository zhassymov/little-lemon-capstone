import {NavLink} from "react-router-dom";

export default function Navigation({links}) {
    return (
        <nav className="absolute -left-32">
            <ul className="w-32">
                {links.map(({path, label}) => (
                    <li key={path}>
                        <NavLink to={path}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
