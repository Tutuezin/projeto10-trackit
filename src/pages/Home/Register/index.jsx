import { Container, TelaCadastro, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "../../../assets/imgs/logoTrackit.svg";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    const body = {
      email,
      name,
      image: picture,
      password,
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );

    promise
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.response.data.message);
      });
  };

  return (
    <Container>
      <TelaCadastro>
        <img width={180} height={178.38} src={logo} alt="" />

        <Form onSubmit={signUp}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="foto"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </Form>

        <p onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
      </TelaCadastro>
    </Container>
  );
}
