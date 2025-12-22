import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './pages/Hero'
import LoginPage from './pages/LoginPage'
import FeaturesExample from './pages/FeaturesExample'
import PageNotFound from './pages/PageNotFound'
import Header from './pages/Header'
import Footer from './components/Footer'
import UseNavigateExample from './hooks/UseNavigateExample'

import React from 'react';
import UseRefExample from "./hooks/UseRefExample";


const App = () => {
  return (
    <div>
      <h1>UseRef Example</h1>
      <UseRefExample />
    </div>
  );
};

export default App;


// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
// </>
//   );
// }









// function App() {

//   return (
   
//       <BrowserRouter>
//        <Header  />
//         <Routes>
//     <Route path="/login" element={<LoginPage/>}/>
//     <Route path="/features" element={<FeaturesExample/>}/>
//     <Route path="/hero" element={<Hero/>}/>
//     <Route path="*" element={<PageNotFound/>}/>
//         </Routes>
        
//         {/* <Footer/> */}
//         <UseNavigateExample/>
//       </BrowserRouter>
//   )
// }

// export default App


// import AppRoutes from "./routes/AppRoutes";
// import { AuthProvider } from "./context/AuthContext";

// function App() {
//   return (
//     <AuthProvider>
//       <AppRoutes />
//     </AuthProvider>
//   );
// }
