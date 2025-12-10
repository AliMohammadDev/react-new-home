import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from './provider.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './utils/router.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);
