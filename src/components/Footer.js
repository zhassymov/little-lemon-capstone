import LogoLink from "./LogoLink";
import Container from "../ui/Container";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
    return (
        <div className="bg-brand-lightgray">
            <Container>
                <footer className="font-paragraph px-4 py-8">
                    <div className="grid md:grid-flow-col">
                        <div className="mt-4">
                            <LogoLink/>
                        </div>
                        <div className="grid md:grid-flow-col">
                            <div>
                                <h4 className="font-paragraph-highlight mt-4">Navigation</h4>
                                <FooterNavigation/>
                            </div>
                            <div>
                                <h4 className="font-paragraph-highlight mt-4">Contact</h4>
                                <ul>
                                    <li>Address</li>
                                    <li>Phone Number</li>
                                    <li>Email</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-paragraph-highlight mt-4">Social Media Links</h4>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>X</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="font-paragraph-highlight flex justify-center items-center mt-8">
                        <p>Little Lemon &copy; 2024</p>
                    </div>
                </footer>
            </Container>
        </div>

    );
}
