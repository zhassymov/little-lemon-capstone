import {NavLink} from "react-router-dom";

export default function Navigation({links}) {
    return (
        <nav>
            <ul>
                {links.map(({path, label}) => (
                    <li key={path}>
                        <NavLink to={path}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
