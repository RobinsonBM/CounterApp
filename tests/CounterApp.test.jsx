import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {
  const value = 100;
  test('Debe de hacer martch con el snapshot', () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('100');
  });
});
