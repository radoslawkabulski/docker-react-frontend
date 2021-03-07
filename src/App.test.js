import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your code looks good/i);
  expect(linkElement).toBeInTheDocument();
});

