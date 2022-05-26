import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

export default function Habits() {
  return (
    <>
      <Header />
      <Container>
        <MyHabits>
          <h2>Meus hábitos</h2>
          <button>+</button>
        </MyHabits>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 9.1rem;
  padding: 0 1.8rem;

  p {
    margin-top: 3rem;
    font-size: 1.8rem;
    color: #666666;
  }
`;

const MyHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2.2rem;
    color: #126ba5;
  }

  button {
    cursor: pointer;

    width: 4rem;
    height: 3.5rem;

    text-align: center;
    font-size: 2.6rem;
    color: #fff;

    border: none;
    border-radius: 0.46rem;
    background-color: #52b6ff;
  }
`;

const CreateHabit = styled.div`
  width: 34rem;
  height: 18rem;
  background-color: #fff;
`;
