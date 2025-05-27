import { Link, Outlet } from 'react-router';

export const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <header>
        <nav role="navigation" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <span aria-hidden="true"> | </span>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main role="main">
        <Outlet />
      </main>
    </div>
  );
};
