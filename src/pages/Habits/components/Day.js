import { useState } from "react";
import styled from "styled-components";

export default function Day({ nameDay, toggleDay, nmrDay, daysSelecteds }) {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <>
      <Li
        onClick={() => {
          setIsSelected(!isSelected);
          toggleDay(nmrDay, isSelected);
        }}
        isSelected={isSelected}
        daysSelecteds={daysSelecteds}
      >
        {nameDay}
      </Li>
    </>
  );
}

const Li = styled.li`
  user-select: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.4rem;
  width: 3rem;
  height: 3rem;

  background-color: ${({ isSelected, daysSelecteds }) =>
    isSelected || daysSelecteds.length === 0 ? "#fff" : "#cfcfcf"};
  font-size: 2rem;
  color: ${({ isSelected, daysSelecteds }) =>
    isSelected || daysSelecteds.length === 0 ? "#dbdbdb" : "#fff"};
  border-radius: 0.5rem;
  border: 1px solid #d4d4d4;
`;
