import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { HomePage } from './pages/HomePage/HomePage';
import App from './App.js';
import { AddPage } from './pages/AddPage/AddPage';
import { RecordsPage } from './pages/RecordsPage/RecordsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'add',
        element: <AddPage />,
      },
      {
        path: 'records',
        element: <RecordsPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(<RouterProvider router={router} />);
