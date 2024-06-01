import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {LogoLink} from "./components/LogoLink";
import {IconButton} from "./components/IconButton";


const links = [
    {
        path: "/",
        label: "Home",
    },
    {
        path: "/about",
        label: "About",
    },
    {
        path: "/menu",
        label: "Menu",
    },
    {
        path: "/reservations",
        label: "Reservations",
    },
    {
        path: "/order",
        label: "Order Online",
    },
    {
        path: "/login",
        label: "Login",
    },
];

export default function App() {
    return (
        <>
            <Header>
                <IconButton src="/assets/icons/hamburger.svg" alt="Menu button"/>
                <LogoLink/>
                <Navigation links={links}/>
                <IconButton src="/assets/icons/cart.svg" alt="CartButton"/>
            </Header>
        </>
    )
}
