import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyGlobalStyles/>
    {/* <Home /> */}
  </StrictMode>,
)
