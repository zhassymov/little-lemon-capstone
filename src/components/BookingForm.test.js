import {render, fireEvent, screen} from "@testing-library/react";

import BookingForm from './BookingForm';

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

test('Renders the BookingForm submit button', () => {
    render(<BookingForm/>);
    expect(screen.getByText("Book Now")).toBeInTheDocument();
})

test('Validates the BookingForm required values', async () => {
    render(<BookingForm/>);

    expect(screen.queryByTestId("bookingDateError")).not.toBeInTheDocument();
    expect(screen.queryByTestId("bookingTimeError")).not.toBeInTheDocument();
    expect(screen.queryByTestId("dinnersError")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("submitBooking"));

    // waiting for the validation finish
    await sleep(1000)
    
    expect(screen.getByTestId("bookingDateError")).toBeInTheDocument();
    expect(screen.getByTestId("bookingDateError")).toHaveTextContent("Booking date is required")

    expect(screen.getByTestId("bookingTimeError")).toBeInTheDocument();
    expect(screen.getByTestId("bookingTimeError")).toHaveTextContent("Booking time is required")

    expect(screen.getByTestId("dinnersError")).toBeInTheDocument();
    expect(screen.getByTestId("dinnersError")).toHaveTextContent("Number of dinners is required")
})
