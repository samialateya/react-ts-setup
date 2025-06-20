import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { HomePage } from './index.tsx';

describe('HomePage', () => {
  test('renders successfully', () => {
    render(<HomePage />);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
