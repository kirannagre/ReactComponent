import { createContext, useContext, useState } from "react";


//create context
const AuthContext = createContext();   


// actual state with login
function AuthProvider({ children }) {
  
     //default state false means logout
    const [isLoggined, setLogin] = useState(false);


     {/*  React using AuthTextProvider  */}
  return (
   
    <AuthContext.Provider value={{ isLoggined, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}


function Login() {

  
  const { isLoggined, setLogin } = useContext(AuthContext);

  return (
    <button onClick={() => setLogin(!isLoggined)}>
      {isLoggined ? "Logout" : "Login"}
    </button>
  );
}


export function UseContextExample2() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
