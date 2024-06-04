function WeekDays() {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date()
        date.setDate(date.getDate() + i)
        const text = date.toLocaleDateString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
        weekDays.push({date, text})
    }
    return weekDays;
}

function DayTimes() {
    const dayTimes = [];
    for (let i = 17; i <= 22; i++) {
        dayTimes.push(`${i}:00`)
    }
    return dayTimes;
}

function Occasions() {
    return ["Birthday", "Engagement", "Anniversary"];
}

export default function BookingForm() {
    const weekDays = WeekDays();
    const dayTimes = DayTimes();
    const occasions = Occasions();

    return (
        <form method="POST"
              className="grid gap-5 text-black *:font-paragraph *:font-bold *:text-md *:placeholder:text-black">
            <div className="grid grid-cols-2 gap-4">
                <select name="bookibg-date" aria-label="Booking date" defaultValue="" className="p-2 appearance-none">
                    <option value="" disabled>Date</option>
                    {weekDays.map(({date, text}) => <option key={text} value={date}>{text}</option>)}
                </select>
                <select name="bookibg-time" aria-label="Booking time" defaultValue="" className="p-2">
                    <option value="" disabled>Time</option>
                    {dayTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                </select>
            </div>
            <input name="diners" type="number" aria-label="Number of Diners" min="1" max="10"
                   placeholder="Number of Diners" className="p-2"/>
            <select name="occasion" aria-label="Occasion" defaultValue="" className="p-2">
                <option value="" disabled>Occasion</option>
                {occasions.map((occasion) => <option key={occasion} value={occasion}>{occasion}</option>)}
            </select>


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
                    className="mt-4 py-4 rounded-2xl bg-brand-yellow text-black font-bold text-xl
                    md:w-1/2 md:mx-auto"
            >Let's go
            </button>
        </form>


    )
}

