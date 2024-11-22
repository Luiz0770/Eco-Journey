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
import MissionDetail from './pages/MissionDetail.jsx';

// Loading
import { dotWave } from 'ldrs'
dotWave.register()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/mission", element: <Mission /> },
      { path: "/mission/:missionId", element: <MissionDetail /> },
      { path: "/ranking", element: <Ranking /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contato",
    element: <Contato />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
);