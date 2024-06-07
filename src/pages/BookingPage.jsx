import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import BookingForm from "../components/BookingForm";
import {InvitingPictures} from "../components/InvitingPictures";

export default function BookingPage() {
    return (

        <div className="bg-brand-green text-white">
            <Container>
                <article>
                    <Title>Little Lemon</Title>
                    <Subtitle>Chicago</Subtitle>
                    <h3 className="font-card-title mt-8">Find a table for any occasion</h3>
                    <InvitingPictures/>
                    <BookingForm/>
                </article>
            </Container>
        </div>
    )
}
