import { useState } from "react";
import styled from "styled-components";

export default function Day({
  nameDay,
  toggleDay,
  nmrDay,
  daysSelecteds,
  cursor,
  isChoiced,
}) {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <>
      <Li
        cursor={cursor}
        onClick={() => {
          setIsSelected(!isSelected);
          toggleDay(nmrDay, isSelected);
        }}
        isChoiced={isChoiced}
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
  cursor: ${({ cursor }) => cursor || "default"};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.4rem;
  width: 3rem;
  height: 3rem;

  background-color: ${({ isSelected, daysSelecteds, isChoiced }) =>
    isSelected || daysSelecteds.length === 0 ? "#fff" : "#cfcfcf"};
  font-size: 2rem;
  color: ${({ isSelected, daysSelecteds, isChoiced }) =>
    isSelected || daysSelecteds.length === 0 ? "#dbdbdb" : "#fff"};
  border-radius: 0.5rem;
  border: 1px solid #d4d4d4;
`;
