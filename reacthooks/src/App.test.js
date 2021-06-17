import { render, screen } from '@testing-library/react';
import UseState from './Lessons/UseState';
import UseContext from './Lessons/UseContext';

test('Elemento principal useState', () => {
  render(<UseState />);
  const linkElement = screen.getByText(/useState/i);
  expect(linkElement).toBeInTheDocument();
});

test('Elemento principal useContext', () => {
  render(<UseContext />)
  const linkElement = screen.getByText(/UseContext/i);
  expect(linkElement).toBeInTheDocument();
})