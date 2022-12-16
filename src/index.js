import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import Photos from './Photos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Photos",
    element: <Photos />
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
    

