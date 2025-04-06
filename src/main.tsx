import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import MyGlobalStyles from './styles/globalStyles';
import AppRoutes from './routes/Router';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyGlobalStyles/>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
