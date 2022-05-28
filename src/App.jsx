import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import Login from "./pages/Home/Login";
import Register from "./pages/Home/Register";
import Habits from "./pages/Habits";

function App() {
  const [token, setToken] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ token, setToken, picture, setPicture }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
