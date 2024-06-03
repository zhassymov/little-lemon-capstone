import IconButton from "../ui/IconButton";
import LogoLink from "./LogoLink";
import Navigation from "./Navigation";
import Container from "../ui/Container";

export default function Header() {
    return (
        <Container>
            <header className="flex p-4">
                <IconButton><img src="/assets/icons/hamburger.svg" alt="Menu button"/></IconButton>
                <LogoLink/>
                <Navigation/>
                <IconButton><img src="/assets/icons/cart.svg" alt="Cart button"/></IconButton>
            </header>
        </Container>
    )
}
