import { render, screen } from '@testing-library/react';
import TextDisplay from './textDisplay';


test('TextDisplay component displays the correct text', () => {
    render(<TextDisplay />);
    const dateText = screen.getByText('test.txt');
    expect(dateText).toBeInTheDocument();
  });
  