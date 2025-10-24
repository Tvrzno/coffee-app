import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { HomePage } from './pages/HomePage/HomePage';
import App from './App.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(<RouterProvider router={router} />);
