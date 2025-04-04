import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MyGlobalStyles from './styles/globalStyles';
import Home from './pages/Home';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyGlobalStyles/>
    <Home />
  </StrictMode>,
)
