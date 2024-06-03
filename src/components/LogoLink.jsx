import {Link} from "react-router-dom";

export default function LogoLink() {
    return (
        <Link to={"/"} className="mx-auto">
            <img src="/assets/icons/logo.svg" alt="Little Lemon restaurant logo"/>
        </Link>
    )
}
