import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {
  const value = 100;
  test('Debe de hacer martch con el snapshot', () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe('100');
  });

  test('debe de incremetar con el boton +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    // expect(screen.getByText('101')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(
      `${value + 1}`
    );
  });
  test('debe de decrementar con el boton -1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    // expect(screen.getByText('101')).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(
      `${value - 1}`
    );
  });

  test('Debe de volver al valor inicial con el boton de reset', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(value).innerHTML).toContain(`${value}`);
  });
});
