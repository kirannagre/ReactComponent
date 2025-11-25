import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import LoginPage from './pages/LoginPage'
import FeaturesExample from './pages/FeaturesExample'
import PageNotFound from './pages/PageNotFound'
import Header from './pages/Header'
import Footer from './components/Footer'

function App() {

  return (
   
      <BrowserRouter>
       <Header  />
        <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/features" element={<FeaturesExample/>}/>
    <Route path="/hero" element={<Hero/>}/>
    <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
