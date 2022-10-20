import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect execute the function ONLY if the dependencies in [] are changed. Its main jog is to avoid side effects
  // we should add "everything" we use in the effect function as a dependency if those "things" could change because your component (or some parent component) re-rendered.
  // but...DON'T need to add state updating functions, DON'T need to add "built-in" APIs or functions, DON'T need to add variables or functions
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn"); // featch it locally.
    if (storedUserLoggedInInformation === 1) {
      setIsLoggedIn(true);
    }
  }, []); // open dependency run make the useEffect runs once.

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1"); // store locally to be fetch later.
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
