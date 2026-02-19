import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

beforeAll(() => {
  global.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
});

test('Renders the main application and finds a heading', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );

  const headingElements = screen.getAllByRole('heading', { name: /Little Lemon/i });
  expect(headingElements[0]).toBeInTheDocument();
});
