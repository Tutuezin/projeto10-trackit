import { Container, TelaCadastro, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import logo from "../../../assets/imgs/logoTrackit.svg";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [loader, setLoader] = useState("Cadastrar");
  const [disable, setDisable] = useState(false);

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
        setDisable(true);
        setLoader(<ThreeDots color="white" />);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(<ThreeDots color="white" />);
        setDisable(true);
        alert(err.response.data.message);
        setLoader("Cadastrar");
        setDisable(false);
      });
  };

  return (
    <Container>
      <TelaCadastro>
        <img width={180} height={178.38} src={logo} alt="" />

        <Form onSubmit={signUp}>
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
          <input
            disabled={disable}
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            disabled={disable}
            type="text"
            placeholder="foto"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
          />
          {<button type="submit">{loader}</button>}
        </Form>

        <p onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
      </TelaCadastro>
    </Container>
  );
}
