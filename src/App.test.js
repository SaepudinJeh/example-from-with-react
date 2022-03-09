import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/contoh form/i);
  expect(linkElement).toBeInTheDocument();
});

const fullName = (firstName) =>
  `Hey ${firstName}, this is your first test using Jest!`;

describe('Testing the tests setup', () => {
  it('Should return the full name', () => {
    const result = `Hey Jakarta, this is your first test using Jest!`;
    expect(fullName('Jakarta')).toBe(result);
  });
});
