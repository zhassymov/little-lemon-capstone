import Container from "../ui/Container";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import BookingForm from "../components/BookingForm";

function WeekDayOptions() {
    const options = [{label: "Date", value: "", disabled: true}];
    for (let i = 0; i < 7; i++) {
        const value = new Date()
        value.setDate(value.getDate() + i)
        const label = value.toLocaleDateString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
        options.push({value: label, label})
    }
    return options;
}

function DayTimeOptions() {
    const options = [{label: "Time", value: "", disabled: true}];
    for (let i = 17; i <= 22; i++) {
        const time = `${i}:00`;
        options.push({label: time, value: time});
    }
    return options;
}

function OccasionOptions() {
    return [
        {label: "Occasion", value: "", disabled: true},
        {label: "Birthday", value: "Birthday"},
        {label: "Engagement", value: "Engagement"},
        {label: "Anniversary", value: "Anniversary"},
    ];
}

export default function BookingPage() {
    const weekDayOptions = WeekDayOptions()
    const dayTimeOptions = DayTimeOptions()
    const occasionOptions = OccasionOptions()

    return (
        <div className="bg-brand-green text-white">
            <Container>
                <article>
                    <Title>Little Lemon</Title>
                    <Subtitle>Chicago</Subtitle>
                    <BookingForm
                        weekDayOptions={weekDayOptions}
                        dayTimeOptions={dayTimeOptions}
                        occasionOptions={occasionOptions}
                    />
                </article>
            </Container>
        </div>
    )
}
