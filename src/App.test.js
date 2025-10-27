import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders the main application and finds a heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Use getAllByText to find all elements with this text
  const headingElements = screen.getAllByText("Little Lemon");
  // Assert that at least one such element is in the document
  expect(headingElements[0]).toBeInTheDocument();
});
