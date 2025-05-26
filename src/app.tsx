import { BrowserRouter } from 'react-router-dom';
import './app.css';
import { Router } from './router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
