import { render, screen } from '@testing-library/react';
import Game from './containers/Game';

test('renders Cars puzzle heading', () => {
  render(<Game />);
  expect(screen.getByRole('heading', { name: /cars puzzle/i })).toBeInTheDocument();
});
