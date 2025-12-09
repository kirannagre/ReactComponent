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
import ListExample from './ListExample.jsx'
import EventExample from './components/EventExample.jsx'
import UseStateExample from './hooks/useStateExample.jsx'
import OnclickExample from './components/Events/OnclickExample.jsx'
import OnchangeExample from './components/Events/OnchangeExample';
import PassingFunctionExample from './components/Events/PassingFunctionExample.jsx'
import ThemeSelection from './components/Events/ThemeSelection.jsx'
import ContactForm from './components/Events/ContactForm.jsx'
import UseEffectExample from './hooks/UseEffectExample';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PropsExample name="kiran" role="java developer"/>
    <PropsExample name="niyaz" role="frontend developer"/>
    <PropsExample name="Hariom" role="Commander"/> */}

    {/* <DisplayData/>
    <ConditionalRender/> */}
    {/* <ListExample/> */}
    {/* <EventExample/> */}
    {/* <UseStateExample/> */}
    {/* <OnclickExample/> */}
    {/* <OnchangeExample/> */}
    {/* <PassingFunctionExample/> */}
    {/* <ThemeSelection/> */}
    {/* <ContactForm/> */}
    <UseEffectExample/>
  </StrictMode>,
)
