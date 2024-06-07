import {Link} from "react-router-dom";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Container from "../ui/Container";

export default function Hero() {
    return (
        <div className="bg-brand-green text-white">
            <Container>
                <article className="relative">
                    <Title>Little Lemon</Title>
                    <Subtitle>Chicago</Subtitle>
                    <p className="max-w-48 my-4 font-paragraph">
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </p>

                    <Link
                        className="inline-block my-4 px-3 py-2 rounded-full bg-brand-yellow text-black font-paragraph-highlight"
                        to="/booking">
                        Reserve a table
                    </Link>

                    <img
                        className=" absolute object-cover overflow-clip rounded-xl
                        hidden size-40 top-28 right-0
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
