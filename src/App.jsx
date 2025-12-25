
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./LoginPage";
import { AdminDashboard, TeacherDashboard, StudentDashboard } from "./Dashboards";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/teacher"
            element={
              <ProtectedRoute allowedRoles={["Teacher"]}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={["Student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

// import { useState } from "react";
// import { createRoot } from "react-dom/client";
// import UseEffectExample from "./hooks/UseEffectExample";
// import { TbCodeOff } from "react-icons/tb";
// import TODOExample from "./hooks/TODOExample";
// import UseReducerExample from "./hooks/UseReducerExample";
// import { useReducer } from 'react';

// import Score from "./hooks/UseReducerExample2";

// const initialScore = [
//   {
//     id: 1,
//     score: 0,
//     name: "John",
//   },
//   {
//     id: 2,
//     score: 0,
//     name: "Sally",
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return state.map((player) => {
//         if (player.id === action.id) {
//           return { ...player, score: player.score + 1 };
//         } else {
//           return player;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Score() {
//   const [score, dispatch] = useReducer(reducer, initialScore);

//   const handleIncrease = (player) => {
//     dispatch({ type: "INCREASE", id: player.id });
//   };

//   return (
//     <>
//       {score.map((player) => (
//         <div key={player.id}>
//           <label>
//             <input
//               type="button"
//               onClick={() => handleIncrease(player)}
//               value={player.name}
//             />
//             {player.score}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// function FavoriteColor(){
//     const [color, setColor] =useState("Pink");
//     return(
//         <>
//        <div className="container">
//         <h1>my FavoriteColor color is{color}!</h1>
//         <button 
//         type="button"
//         onClick={()=>setColor("red")}
//         >RED</button>

//         <button
//         type="button"
//         onClick={()=>setColor("yellow")}
//         >  Yellow</button>

//         <button
//         type="button"
//         onClick={()=>setColor("blue")}
//         >Blue</button>

//         <button
//         type="button"
//         onClick={()=>setColor("White")}
//         >White</button>
//         <button
//         type="button"
//         onClick={()=>setColor("Black")}
//         >  Black</button>

//         <button
//         type="button"
//         onClick={()=>setColor("Orange")}
//         >Orang</button>

//         <button
//         type="button"
//         onClick={()=>setColor("Green")}
//         >Green</button>
//      </div>


//         </>
        

//     )
// }

// createRoot(document.getElementById(`root`)).render(
// <FavoriteColor/>
// );

// function MyCar() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }
// export default MyCar;

// export default FavoriteColor;
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';

// import Hero from './pages/Hero';
// import LoginPage from './pages/LoginPage';
// import FeaturesExample from './pages/FeaturesExample';
// import PageNotFound from './pages/PageNotFound';
// import Header from './pages/Header';
// import Footer from './components/Footer';

// import UseNavigateExample from './hooks/UseNavigateExample';
// import UseRefExample from "./hooks/UseRefExample";
// import UseCallBackHook from './hooks/UseCallBackHook';
// import Use(IDExample from './hooks/UseIDExample';
// import UseEffectLayoutExample from './hooks/UseEffectLayoutExample';

// import { CourseProvider } from `./context/CourseContext`;
// import CourseList from "./components/CourseList";
// import EnrolledCourses from "./components/EnrolledCourses";


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />

//       <CourseProvider>
//         <div className="container">
//           <h1>Student Course Management Dashboard</h1>
//           <div className="grid">
//             <CourseList />
//             <EnrolledCourses />
//           </div>
//         </div>
//       </CourseProvider>

//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/features" element={<FeaturesExample />} />
//         <Route path="/navigate" element={<UseNavigateExample />} />
//         <Route path="/useref" element={<UseRefExample />} />
//         <Route path="/usecallback" element={<UseCallBackHook />} />
//         <Route path="/useid" element={<UseIDExample />} />
//         <Route path="/uselayouteffect" element={<UseEffectLayoutExample />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;




// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Hero from './pages/Hero'
// import LoginPage from './pages/LoginPage'
// import FeaturesExample from './pages/FeaturesExample'
// import PageNotFound from './pages/PageNotFound'
// import Header from './pages/Header'
// import Footer from './components/Footer'
// import UseNavigateExample from './hooks/UseNavigateExample'

// import React from 'react';
// import UseRefExample from "./hooks/UseRefExample";
// import UseCallBackHook from './hooks/UseCallBackHook'
// import UseIDExample from './hooks/UseIDExample'
// import UseEffectLayoutExample from './hooks/UseEffectLayoutExample'

// import React from "react";
// import { CourseProvider } from "./context/CourseContext";
// import CourseList from "./components/CourseList";
// import EnrolledCourses from "./components/EnrolledCourses";
// import "./styles.css";

// const App = () => {
//   return (
//     <CourseProvider>
//       <div className="container">
//         <h1>Student Course Management Dashboard</h1>
//         <div className="grid">
//           <CourseList />
//           <EnrolledCourses />
//         </div>
//       </div>
//     </CourseProvider>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <div>
//       {/* <h1>UseRef Example</h1> */}
//      {/* <UseCallBackHook/> */}
//      {/* <UseIDExample/> */}
//      {/* <UseEffectLayoutExample/> */}
//      {/* <UseEffectExample/> */}
// {/* <TODOExample/> */}
// {/* <UseReducerExample/> */}
// <CountCharacter/>
//  {/* <Score/> */}
//     </div>
//   );
// };

// export default App;



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
// import CountCharacter from './hooks/CountCharacter';

// function App() {
//   return (
//     <AuthProvider>
//       <AppRoutes />
//     </AuthProvider>
//   );
// }
