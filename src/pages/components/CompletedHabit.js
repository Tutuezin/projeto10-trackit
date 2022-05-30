import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as CompletedButton } from "../../assets/imgs/completedButton.svg";

export default function CompletedHabit({ habit }) {
  const [isDone, setIsDone] = useState(habit.done);

  const toggleDone = () => {
    setIsDone(!isDone);
  };
  useEffect(() => console.log(isDone), [isDone]);

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