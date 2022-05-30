import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historic() {
  return (
    <>
      <Header />
      <Container>
        <h2>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 10rem;
  margin-bottom: 8rem;
  padding: 0 1.8rem;

  h2 {
    font-size: 2.2rem;
    color: #126ba5;
  }

  p {
    margin-top: 1.7rem;
    font-size: 1.8rem;
    color: #666666;
  }
`;
