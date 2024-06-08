import IconButton from "../ui/IconButton";
import LogoLink from "./LogoLink";
import Navigation from "./Navigation";
import Container from "../ui/Container";
import {useState} from "react";

export default function Header() {
    const [hidden, setHidden] = useState(true)


    console.log("render")

    return (
        <Container>
            <header className="flex p-4 justify-between items-center">
                <IconButton
                    onClick={() => setHidden(!hidden)}

                >
                    <img src="/assets/icons/hamburger.svg" alt="Menu button"/>
                </IconButton>

                <LogoLink/>

                <Navigation hidden={hidden} toggle={() => setHidden(!hidden)}/>

                <IconButton>
                    <img src="/assets/icons/cart.svg" alt="Cart button"/>
                </IconButton>
            </header>
        </Container>
    )
}
