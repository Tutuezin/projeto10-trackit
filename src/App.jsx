import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Home/Login";
import Register from "./pages/Home/Register";
import Habits from "./pages/Habits";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/habitos" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
