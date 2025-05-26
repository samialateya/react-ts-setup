import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../lib/layouts/main';
import { HomePage } from '../pages/home';

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<div>About Page</div>} />
        </Route>
        <Route path="auth" element={<div>Auth</div>} />
      </Routes>
    </>
  );
}
