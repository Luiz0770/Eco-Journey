import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Imports
import App from './App.jsx';
import Home from './pages/Home.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Mission from './pages/Mission.jsx';
import Ranking from './pages/Ranking.jsx';
import Contato from './pages/Contato.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/mission", element: <Mission /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "/contato", element: <Contato /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
);