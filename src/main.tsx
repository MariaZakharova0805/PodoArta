import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx"
import { Normalize } from 'styled-normalize'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home/Home.tsx'
import { About } from './pages/About/About.tsx'
import { Servecies } from './pages/Servecies/Servecies.tsx'
import { Contacts } from './pages/Contacts/Contacts.tsx'
import { Examples } from './pages/Examples/Examples.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/servecies",
        element: <Servecies />,
      },
      {
        path: "/gallery",
        element: <Examples />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Normalize />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
