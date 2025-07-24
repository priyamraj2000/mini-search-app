import React, { useState } from "react";
import LoginPage from "./LoginPage";
import SearchPage from "./SearchPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (receivedToken) => {
    setToken(receivedToken);
    localStorage.setItem("token", receivedToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return token ? (
    <SearchPage onLogout={handleLogout} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

export default App;
