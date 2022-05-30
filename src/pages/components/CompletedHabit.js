import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { useState, useContext, useEffect } from "react";
import { ReactComponent as CompletedButton } from "../../assets/imgs/completedButton.svg";
import axios from "axios";

export default function CompletedHabit({ habit }) {
  const [isDone, setIsDone] = useState(habit.done);
  const { setHabitDoned, habitDoned, token } = useContext(UserContext);

  const toggleDone = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    setIsDone(!isDone);
    if (isDone) {
      setHabitDoned((habitDoned) => [...habitDoned, habit.id]);
    } else {
      setHabitDoned((habitDoned) => habitDoned.filter((id) => id !== habit.id));
    }

    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,
      config
    );
    promise
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };

  // useEffect(() => console.log(habitDoned), [habitDoned]);

  return (
    <CompletedHabits isDone={isDone}>
      <div className="completedInfo">
        <h2>{habit.name}</h2>
        <p>
          Sequência atual: {habit.currentSequence} dia(s) <br /> Seu recorde:{" "}
          {habit.highestSequence} dia(s)
        </p>
      </div>
      <button onClick={() => toggleDone()}>
        <CompletedButton />
      </button>
    </CompletedHabits>
  );
}

const CompletedHabits = styled.div`
  margin-bottom: 1rem;

  display: flex;
  background-color: #fff;

  .completedInfo {
    margin-right: 3.5rem;
    h2 {
      font-size: 2rem;
      color: #666666;
    }
  }

  button {
    cursor: pointer;
    background-color: initial;
    border: none;

    svg {
      rect {
        fill: ${({ isDone }) => (isDone ? "#8fc549" : "#EBEBEB")};
      }
    }
  }
`;
