import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './app.tsx';

describe('Badge', () => {
  test('renders successfully', () => {
    render(App());
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
