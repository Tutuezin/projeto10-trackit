import { Container, TelaLogin, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../../contexts/UserContext";
import logo from "../../../assets/imgs/logoTrackit.svg";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);
  const { setPicture } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState("Entrar");
  const [disable, setDisable] = useState(false);

  const signIn = (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      body
    );
    promise
      .then((res) => {
        console.log(res.data);
        setLoader(<ThreeDots color="white" />);
        setToken(res.data.token);
        setPicture(res.data.image);
        setDisable(true);
        navigate("/habitos");
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(<ThreeDots color="white" />);
        setDisable(true);
        alert(err.response.data.message);
        setLoader("Entrar");
        setDisable(false);
        setPassword("");
      });
  };
  return (
    <Container>
      <TelaLogin>
        <img width={180} height={178.38} src={logo} alt="" />

        <Form onSubmit={signIn}>
          <input
            disabled={disable}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            disabled={disable}
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{loader}</button>
        </Form>

        <p onClick={() => navigate("/cadastro")}>
          Não tem uma conta? Cadastre-se!
        </p>
      </TelaLogin>
    </Container>
  );
}
