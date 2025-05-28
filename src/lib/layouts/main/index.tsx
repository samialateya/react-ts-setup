import { Link, Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div className="h-screen overflow-auto">
      <header
        className="flex items-center justify-center bg-gray-800 p-4 text-white"
        role="banner"
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex gap-4"
        >
          <Link to="/">Home</Link>
          <span aria-hidden="true">|</span>
          <Link to="about">About</Link>
        </nav>
      </header>
      <main role="main">
        <Outlet />
      </main>
    </div>
  );
};
