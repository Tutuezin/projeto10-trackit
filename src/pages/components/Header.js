import React from "react";
import styled from "styled-components";
import trackit from "../../assets/imgs/trackit.svg";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
  const { picture } = useContext(UserContext);

  return (
    <Top>
      <img width={100} height={37} src={trackit} alt="Trackit Logo" />
      <img
        width={51}
        height={51}
        id="profileImg"
        src={picture}
        alt="Profile Image"
      />
    </Top>
  );
}

const Top = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  height: 7rem;

  background-color: #126ba5;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.15);

  #profileImg {
    border-radius: 9.9rem;
  }
`;
