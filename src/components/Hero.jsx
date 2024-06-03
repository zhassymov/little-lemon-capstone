import {Link} from "react-router-dom";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Container from "../ui/Container";

export default function Hero() {
    return (
        <div className="bg-brand-green">
            <Container>
                <article className="relative  text-white px-4 py-8">
                    <Title>Little Lemon</Title>
                    <Subtitle>Chicago</Subtitle>
                    <p className="font-paragraph max-w-[225px] my-4 pr-2">
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>

                    <Link
                        className="mx-auto px-3 py-2 rounded-full bg-brand-yellow text-black font-paragraph-highlight"
                        to="/booking">
                        Reserve a table
                    </Link>

                    <img
                        className="hidden absolute object-cover overflow-clip rounded-xl top-32 right-4 size-36
                        xs:block

                        sm:top-16
                        sm:size-64

                        md:top-8
                        md:size-96"
                        src={"/assets/images/dish-hero.webp"}
                        alt="Delicious food"
                    />
                </article>
            </Container>
        </div>

    )
}
