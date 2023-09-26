import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Extend Jest matchers
import { Header } from './header';

test('Header component renders correctly', () => {
  render(<Header />);

  // Use toBeInTheDocument matcher
  expect(screen.getByText('Little Lemon logo')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument(); // Replace with actual link text

  // You can add more assertions as needed
});

test('Header navigation works correctly', () => {
  render(<Header />);

  // Simulate a click event on the hamburger button
  fireEvent.click(screen.getByTestId('hamburger-button'));

  // Assert that the navigation links are visible after clicking the hamburger button
  expect(screen.getByText('Home')).toBeInTheDocument(); // Replace with actual link text
  expect(screen.getByText('About')).toBeInTheDocument(); // Replace with actual link text

  // You can add more assertions and interactions as needed
});
