import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('Renders all form labels', () => {
    // Mock props required by the BookingForm component
    const availableTimes = ['17:00', '18:00', '19:00'];
    const dispatch = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

    // Check for "Choose date" label
    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();

    const timeLabel = screen.getByText("Choose time");
    expect(timeLabel).toBeInTheDocument();

    const guestsLabel = screen.getByText("Number of guests");
    expect(guestsLabel).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
  });
});