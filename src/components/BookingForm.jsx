import {useForm} from "react-hook-form";
import {useState} from "react";
import {InvitingPictures} from "./InvitingPictures";

export default function BookingForm({weekDayOptions, dayTimeOptions, occasionOptions}) {
    const [submitted, setSubmitted] = useState(false)

    const {
        register,
        formState: {
            errors,
            isSubmitting,
        },
        handleSubmit,
        watch,
    } = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        fetch("http://localhost:8000/booking", {
            method: "POST",
            body: JSON.stringify(data),
        })
        setSubmitted(true)
    }

    return (
        !submitted ?
            <>
                <h3 className="font-card-title mt-8">Find a table for any occasion</h3>
                <InvitingPictures/>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="
                grid gap-2.5
                *:font-paragraph *:font-bold *:text-md *:placeholder:text-black"
                >

                    <div className="grid grid-cols-2 gap-4">
                        <select
                            {...register("bookingDate", {
                                required: "Booking date is required",
                                validate: {}
                            })}
                            id="bookingDate"
                            defaultValue=""
                            className="
                        w-full
                        p-2 h-10
                        border-0
                        rounded-lg
                        bg-brand-lightgray
                        text-black
                        text-md"
                        >
                            {weekDayOptions.map(({label, value, disabled}) => (
                                <option key={label} value={value} disabled={disabled}>
                                    {label}
                                </option>))
                            }
                        </select>

                        <select
                            {...register("bookingTime", {
                                required: "Booking time is required"
                            })}
                            id="bookingTime"
                            defaultValue=""
                            className="
                        w-full
                        p-2 h-10
                        border-0
                        rounded-lg
                        bg-brand-lightgray
                        text-black
                        text-md"
                        >
                            {dayTimeOptions.map(({label, value, disabled}) => (
                                <option key={label} value={value} disabled={disabled}>
                                    {label}
                                </option>))
                            }
                        </select>
                    </div>

                    <div className="grid">
                        {errors?.bookingDate &&
                            <p
                                data-testid="bookingDateError"
                                className="font-paragraph text-red-500 text-sm">
                                {errors?.bookingDate?.message}
                            </p>
                        }
                        {errors?.bookingTime &&
                            <p
                                data-testid="bookingTimeError"
                                className="font-paragraph text-red-500 text-sm">
                                {errors?.bookingTime?.message}
                            </p>}
                    </div>

                    <input
                        {...register("dinners", {
                            required: "Number of dinners is required",
                            min: {value: 1, message: "Minimum number of dinners is 1"},
                            max: {value: 10, message: "Maximum number of dinners is 10"},
                        })}
                        id="dinners"
                        defaultValue=""
                        type="number"
                        placeholder="Number of dinners"
                        min="1" max="10"
                        className="
                    w-full
                    p-2 h-10
                    border-0
                    rounded-lg
                    bg-brand-lightgray
                    text-black
                    text-md"
                    />

                    <div className="grid">
                        {errors?.dinners &&
                            <p
                                data-testid="dinnersError"
                                className="font-paragraph text-red-500 text-sm">
                                {errors?.dinners?.message}
                            </p>}
                    </div>

                    <select
                        {...register("occasion", {})}
                        id="occasion"
                        defaultValue=""
                        className="
                    w-full
                    p-2 h-10
                    border-0
                    rounded-lg
                    bg-brand-lightgray
                    text-black
                    text-md"
                    >
                        {occasionOptions.map(({label, value, disabled}) => (
                            <option key={label} value={value} disabled={disabled}>
                                {label}
                            </option>))
                        }
                    </select>

                    <div></div>

                    <div className="grid gap-3 text-white">
                        <p className="font-card-title">Seating Options</p>
                        <div className="flex font-paragraph">
                            <label htmlFor="standard" className="flex-grow">Standard</label>
                            <input
                                {...register("seatingOptions")}
                                type="radio"
                                id="standard"
                                name="seatingOptions"
                                value="Standard"
                                className="size-5"
                            />
                        </div>
                        <div className="flex font-paragraph">
                            <label htmlFor="outside" className="flex-grow">Outside</label>
                            <input
                                {...register("seatingOptions")}
                                type="radio"
                                id="outside"
                                name="seatingOptions"
                                value="Outside"
                                className="size-5"
                            />
                        </div>
                    </div>

                    <button
                        data-testId="submitBooking"
                        type="submit"
                        disabled={isSubmitting}
                        className="
                    my-4 py-4
                    rounded-2xl
                    bg-brand-yellow
                    text-black text-xl font-bold
                    md:w-1/2 md:mx-auto

                    disabled:bg-brand-darkgray
                    disabled:text-gray-500

                    hover:brightness-110
                    focus:brightness-110

                    transition-all
                    "
                    >
                        Book Now
                    </button>
                </form>

            </>

            :

            <div className="grid gap-2 font-paragraph my-4">
                <h3 className="font-card-title my-4 text-brand-yellow">
                    Thank you for your reservation!
                </h3>
                <div className="flex justify-between">
                    <p>Date:</p>
                    <p>{watch("bookingDate")}</p>
                </div>
                <div className="flex justify-between">
                    <p>Time:</p>
                    <p>{watch("bookingTime")}</p>
                </div>
                <div className="flex justify-between">
                    <p>Number of dinners:</p>
                    <p>{watch("dinners")}</p>
                </div>

                {
                    watch("occasion") &&
                    <div className="flex justify-between">
                        <p>Occasion:</p>
                        <p>{watch("occasion")}</p>
                    </div>
                }
                {
                    watch("seatingOptions") &&
                    <div className="flex justify-between">
                        <p>Seating Options:</p>
                        <p>{watch("seatingOptions")}</p>
                    </div>
                }
            </div>
    )
}

