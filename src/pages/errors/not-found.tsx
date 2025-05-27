import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/button';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
        <p className="mt-2 text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            navigate('/');
          }}
        >
          Go to Home
        </Button>
      </section>
    </main>
  );
}
