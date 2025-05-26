import { Link, Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
