import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompletedHabit from "../components/CompletedHabit";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Today() {
  const { habitsToday } = useContext(UserContext);

  const dia = new Date();

  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça-Feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  return (
    <>
      <Header />
      <Container>
        <h2>
          {weekDays[dia.getDay()]}, {dia.getDate()}/
          {dia.getMonth() < 10 ? `0${dia.getMonth() + 1}` : dia.getMonth()}
        </h2>
        <p>Nenhum hábito concluído ainda</p>

        {habitsToday.map((habit, index) => {
          return <CompletedHabit key={index} habit={habit} />;
        })}
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
    margin-top: 0.4rem;
    margin-bottom: 2.8rem;
    font-size: 1.8rem;
    color: #bababa;
  }
`;
