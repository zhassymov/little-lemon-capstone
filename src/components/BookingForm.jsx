import Select from "../ui/Select";

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
        options.push({value, label})
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

function DinnersOptions() {
    const options = [{label: "Number of Diners", value: "", disabled: true}];
    for (let i = 1; i <= 10; i++) {
        options.push({label: i, value: i})
    }
    return options
}

function OccasionOptions() {
    return [
        {label: "Occasion", value: "", disabled: true},
        {label: "Birthday", value: "birthday"},
        {label: "Engagement", value: "engagement"},
        {label: "Anniversary", value: "anniversary"},
    ];
}

export default function BookingForm() {

    return (
        <form method="POST"
              className="grid gap-5 *:font-paragraph *:font-bold *:text-md *:placeholder:text-black">
            <div className="grid grid-cols-2 gap-4">
                <Select
                    id={"booking-date"}
                    name={"booking-date"}
                    options={WeekDayOptions()}
                />
                <Select
                    id="bookibg-time"
                    name="bookibg-time"
                    options={DayTimeOptions()}
                />
            </div>

            <Select
                id="dinners"
                name="dinners"
                options={DinnersOptions()}
            />

            <Select
                id="occasion"
                name="occasion"
                options={OccasionOptions()}
            />
            
            <div className="grid gap-3 text-white">
                <p className="font-card-title">Seating Options</p>
                <div className="flex font-paragraph">
                    <label htmlFor="standard" className="flex-grow">Standard</label>
                    <input type="radio" name="seating-options" id="standard"
                           aria-label="Standard Seating Option"
                           value="standard"
                           className="size-5"
                    />
                </div>
                <div className="flex font-paragraph">
                    <label htmlFor="outside" className="flex-grow">Outside</label>
                    <input type="radio" name="seating-options" id="outside"
                           aria-label="Outside Seating Option"
                           value="outside"
                           className="size-5"
                    />
                </div>
            </div>

            <button type="submit"
                    className="my-4 py-4 rounded-2xl bg-brand-yellow text-black font-bold text-xl
                md:w-1/2 md:mx-auto"
            >Let's go
            </button>
        </form>
    )
}

