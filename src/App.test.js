import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component without crashing', () => {
  render(<App />);
  // Si el componente se renderiza sin errores, la prueba pasará automáticamente
});