import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import MyGlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/Router';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyGlobalStyles/>
    <ToastContainer position="top-right" autoClose={3000} />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
