import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

beforeAll(() => {
  // Mock the global fetchAPI function to prevent errors in the test environment,
  // as the Main component tries to call it on mount.
  global.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
});

test('Renders the main application and finds a heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Find all heading elements with the name "Little Lemon".
  // This is more robust and accessibility-focused than searching for text.
  const headingElements = screen.getAllByRole('heading', { name: /Little Lemon/i });
  expect(headingElements[0]).toBeInTheDocument();
});
