import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomePage } from './pages/HomePage/HomePage';
import App from './App.js';
import { AddPage } from './pages/AddPage/AddPage';
import { RecordsPage } from './pages/RecordsPage/RecordsPage';
import { AddRecordPage } from './pages/AddRecordPage/AddRecordPage.js';
import { DetailPage } from './pages/DetailPage/DetailPage.js';

const queryClient = new QueryClient();

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
        path: 'add/:type',
        element: <AddRecordPage />,
      },
      {
        path: 'records',
        element: <RecordsPage />,
      },
      {
        path: 'detail/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
