import styled from "styled-components";

export default function DayFinished({ isChoiced, nameDay }) {
  return (
    <>
      <Li isChoiced={isChoiced}>{nameDay}</Li>
    </>
  );
}

const Li = styled.li`
  user-select: none;
  cursor: default;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.4rem;
  width: 3rem;
  height: 3rem;

  background-color: ${({ isChoiced }) => (!isChoiced ? "#fff" : "#cfcfcf")};
  font-size: 2rem;
  color: ${({ isChoiced }) => (!isChoiced ? "#dbdbdb" : "#fff")};
  border-radius: 0.5rem;
  border: 1px solid #d4d4d4;
`;
