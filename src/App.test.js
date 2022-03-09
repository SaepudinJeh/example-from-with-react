import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('Should render APP component', () => {
  render(<App />);
  const linkElement = screen.getByText(/contoh form/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should be a form label', () => {
  render(<App />);

  expect(screen.getByLabelText(/nama depan/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/nama belakang/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/kota/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/provinsi/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/kode pos/i)).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /Selanjutnya/i })).toBeInTheDocument()
});

test('Must be a submit button', () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /Selanjutnya/i })).toBeInTheDocument()
});

const fullName = (firstName) =>
  `Hey ${firstName}, this is your first test using Jest!`;

describe('Testing the tests setup', () => {
  it('Should return the full name', () => {
    const result = `Hey Jakarta, this is your first test using Jest!`;
    expect(fullName('Jakarta')).toBe(result);
  });
});
