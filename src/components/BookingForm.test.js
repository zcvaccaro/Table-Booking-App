import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  test('Renders all form fields and labels correctly', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Use getByLabelText for better accessibility testing, as it ensures
    // labels are correctly associated with their form controls.
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    // The button's accessible name is defined by its `aria-label`, which is "On Click".
    // We should query by this name for a more accurate and accessibility-focused test.
    expect(screen.getByRole('button', { name: /on click/i })).toBeInTheDocument();
  });
});