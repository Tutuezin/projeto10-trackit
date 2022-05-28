import React, { useState, useEffect, useContext } from "react";
import BodyStyle from "../../assets/css/BodyStyle";
import styled from "styled-components";
import Header from "./components/Header";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

function Day({ nameDay, toggleDay, nmrDay }) {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <>
      <Li
        onClick={() => {
          setIsSelected(!isSelected);
          toggleDay(nmrDay, isSelected);
        }}
        isSelected={isSelected}
      >
        {nameDay}
      </Li>
    </>
  );
}

export default function Habits() {
  const { token } = useContext(UserContext);

  const [addForm, setAddForm] = useState(false);
  const [daysSelecteds, setDaysSelecteds] = useState([]);
  const [habitName, setHabitName] = useState("");

  useEffect(() => console.log(daysSelecteds), [daysSelecteds]);

  const toggleDay = (nmrDay, isSelected) => {
    if (isSelected) {
      const arrayDays = [...daysSelecteds, nmrDay];
      setDaysSelecteds(arrayDays);
    } else {
      const arrayDays = daysSelecteds.filter((nmr) => {
        if (nmr !== nmrDay) return true;
        return false;
      });
      setDaysSelecteds(arrayDays);
    }
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const sendHabit = (e) => {
    e.preventDefault();
    const body = {
      name: habitName,
      days: daysSelecteds,
    };
    console.log(body);
  };
  console.log(daysSelecteds);
  console.log(habitName);

  return (
    <>
      <BodyStyle />

      <Header />

      <Container>
        <MyHabits>
          <h2>Meus hábitos</h2>
          <button onClick={() => setAddForm(true)}>+</button>
        </MyHabits>

        <CreateHabit addForm={addForm}>
          <Form onSubmit={sendHabit}>
            <input
              type="text"
              placeholder="nome do hábito"
              value={habitName}
              onChange={({ target }) => setHabitName(target.value)}
            />

            <ul className="days">
              <Day toggleDay={toggleDay} nameDay={"D"} nmrDay={0} />
              <Day toggleDay={toggleDay} nameDay={"S"} nmrDay={1} />
              <Day toggleDay={toggleDay} nameDay={"T"} nmrDay={2} />
              <Day toggleDay={toggleDay} nameDay={"Q"} nmrDay={3} />
              <Day toggleDay={toggleDay} nameDay={"Q"} nmrDay={4} />
              <Day toggleDay={toggleDay} nameDay={"S"} nmrDay={5} />
              <Day toggleDay={toggleDay} nameDay={"S"} nmrDay={6} />
            </ul>

            <div className="choice">
              <h4 onClick={() => setAddForm(false)}>cancelar</h4>
              <button type="submit">Salvar</button>
            </div>
          </Form>
        </CreateHabit>

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
    user-select: none;
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
  display: ${(props) => (props.addForm ? "default" : "none")};

  margin-top: 2.2rem;
  width: 34rem;
  height: 18rem;

  border-radius: 0.5rem;
  background-color: #fff;
`;

const Form = styled.form`
  padding: 1.8rem;

  input {
    width: 30.3rem;
    height: 4.5rem;
    padding-left: 1.1rem;

    font-size: 2rem;
    color: #666666;

    border: 1px solid #d4d4d4;
    border-radius: 0.5rem;

    &::placeholder {
      font-size: 2rem;
      color: #dbdbdb;
    }
  }

  .days {
    display: flex;
    margin-top: 0.8rem;
  }

  .choice {
    margin-top: 2.9rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    h4 {
      cursor: pointer;
      font-size: 1.6rem;
      margin-right: 2.3rem;
      color: #52b6ff;
    }

    button {
      cursor: pointer;
      width: 8.4rem;
      height: 3.5rem;
      font-size: 1.6rem;

      border: none;
      border-radius: 0.4rem;
      color: #fff;
      background-color: #52b6ff;
    }
  }
`;

const Li = styled.li`
  user-select: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.4rem;
  width: 3rem;
  height: 3rem;

  background-color: ${(props) => (props.isSelected ? "#fff" : "#cfcfcf")};
  font-size: 2rem;
  color: ${(props) => (props.isSelected ? "#dbdbdb" : "#fff")};
  border-radius: 0.5rem;
  border: 1px solid #d4d4d4;
`;
