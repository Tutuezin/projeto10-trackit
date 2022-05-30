import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompletedHabit from "../components/CompletedHabit";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Today() {
  const { habitsToday, percentage, setHabitsToday, token } =
    useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise
      .then((res) => {
        setHabitsToday(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

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

        {percentage === 0 ? (
          <p>Nenhum hábito concluído ainda</p>
        ) : (
          <p>{percentage.toFixed()}% dos hábitos concluídos</p>
        )}

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
