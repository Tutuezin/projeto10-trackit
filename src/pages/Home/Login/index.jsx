import { Container, TelaLogin, Form } from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/imgs/logoTrackit.svg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    const body = {
      email,
      password,
    };

    console.log(body);
  };
  return (
    <Container>
      <TelaLogin>
        <img width={180} height={178.38} src={logo} alt="" />

        <Form onSubmit={signIn}>
          <input
            type="text"
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
          <button type="submit">Entrar</button>
        </Form>

        <p onClick={() => navigate("/cadastro")}>
          Não tem uma conta? Cadastre-se!
        </p>
      </TelaLogin>
    </Container>
  );
}
