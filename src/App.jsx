import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import Login from "./pages/Home/Login";
import Register from "./pages/Home/Register";
import Habits from "./pages/Habits";
import Today from "./pages/Today";
import Historic from "./pages/Historic";

function App() {
  const [token, setToken] = useState("");
  const [picture, setPicture] = useState("");
  const [habitDoned, setHabitDoned] = useState([]);
  const [habitsToday, setHabitsToday] = useState([]);
  const [percentage, setPercentage] = useState(
    (habitDoned.length / habitsToday.length) * 100
  );

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
          token,
          setToken,
          picture,
          setPicture,
          habitDoned,
          setHabitDoned,
          habitsToday,
          setHabitsToday,
          percentage,
          setPercentage,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Historic />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
