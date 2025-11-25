import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Learn from './Learn.jsx'
import PropsExample from './PropsExample.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Header from './pages/Header.jsx'
import DisplayData from './DisplayData.jsx'
import ConditionalRender from './components/Auth/ConditionalRender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PropsExample name="kiran" role="java developer"/>
    <PropsExample name="niyaz" role="frontend developer"/>
    <PropsExample name="Hariom" role="Commander"/> */}

    {/* <DisplayData/> */}
    <ConditionalRender/>
  </StrictMode>,
)
