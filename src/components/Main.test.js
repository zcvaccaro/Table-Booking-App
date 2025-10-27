import { initializeState, reducer } from './Main';

describe('initializeState', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('returns the correct initial state when localStorage is empty', () => {
    const initialState = initializeState();
    expect(initialState).toEqual({
      availableTimes: [],
      bookings: [],
    });
  });

  test('loads bookings from localStorage if they exist', () => {
    const bookings = [{ date: '2024-10-10', time: '18:00', guests: 2, occasion: 'Birthday' }];
    localStorage.setItem('bookings', JSON.stringify(bookings));

    const initialState = initializeState();
    expect(initialState.bookings).toEqual(bookings);
  });
});

describe('reducer', () => {
  test('should handle UPDATE_TIMES action', () => {
    const currentState = {
      availableTimes: [],
      bookings: [],
    };
    const newTimes = ['20:00', '21:00'];
    const action = { type: 'UPDATE_TIMES', payload: newTimes };

    const newState = reducer(currentState, action);
    expect(newState).toEqual({
      availableTimes: newTimes,
      bookings: [],
    });
  });

  test('should handle ADD_BOOKING action and save to localStorage', () => {
    const currentState = {
      availableTimes: ['17:00'],
      bookings: [],
    };
    const newBooking = { date: '2024-10-11', time: '19:00', guests: 4, occasion: 'Anniversary' };
    const action = { type: 'ADD_BOOKING', payload: newBooking };

    const newState = reducer(currentState, action);

    // Check that the new booking was added to the state
    expect(newState.bookings).toEqual([newBooking]);

    // Check that the updated bookings were saved to localStorage
    const savedBookings = JSON.parse(localStorage.getItem('bookings'));
    expect(savedBookings).toEqual([newBooking]);
  });

  test('should return the current state for an unknown action', () => {
    const currentState = {
      availableTimes: ['17:00'],
      bookings: [{ date: '2024-01-01' }],
    };
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = reducer(currentState, action);
    expect(newState).toEqual(currentState);
  });
});