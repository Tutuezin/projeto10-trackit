import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import Login from "./pages/Home/Login";
import Register from "./pages/Home/Register";
import Habits from "./pages/Habits";
import Today from "./pages/Today";
import Historic from "./pages/Historic";
import axios from "axios";

function App() {
  const [token, setToken] = useState("");
  const [picture, setPicture] = useState("");
  const [habitDoned, setHabitDoned] = useState([]);
  useEffect(() => console.log(habitDoned), [habitDoned]);

  const [habitsToday, setHabitsToday] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(token);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise
      .then((res) => {
        console.log(res.data);
        setHabitsToday(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [token]);

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
