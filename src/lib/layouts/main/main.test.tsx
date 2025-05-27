import { HomePage } from '$pages/home/index.tsx';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { MainLayout } from './index.tsx';

const mockRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'about',
        element: <div>About Page</div>,
      },
    ],
  },
];
let user: ReturnType<typeof userEvent.setup>;

describe('MainLayout with Router', () => {
  beforeEach(() => {
    user = userEvent.setup();
  });

  test('renders layout with Home route', async () => {
    const router = createBrowserRouter(mockRoutes);
    render(<RouterProvider router={router} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();

    // Navigate to About page
    const aboutLink = screen.getByRole('link', { name: 'About' });
    await act(async () => {
      await user.click(aboutLink);
    });
    expect(screen.getByText('About Page')).toBeInTheDocument();
    expect(screen.queryByText('Home Page')).not.toBeInTheDocument();
  });
});
