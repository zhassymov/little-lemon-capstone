import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import BookingForm from "../components/BookingForm";

export default function BookingPage() {
    return (
        <div className="bg-brand-green text-white">
            <Container>
                <article>
                    <Title>Little Lemon</Title>
                    <Subtitle>Chicago</Subtitle>
                    <BookingForm/>
                </article>
            </Container>
        </div>
    )
}
