import { render, screen } from '@testing-library/react';
import App from './App';

test('renders The Dopest Editor component', () => {
  render(<App />);
  const dopestEditorElement = screen.getByText(/The Dopest Editor You Never Edited With/i);
  const dopestEditor2Element = screen.getByText(/The Dopest Editor PART 2/i);
  expect(dopestEditorElement).toBeInTheDocument();
  expect(dopestEditor2Element).toBeInTheDocument();
});
