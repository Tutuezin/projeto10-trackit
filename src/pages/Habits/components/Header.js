import React from "react";
import styled from "styled-components";
import bob from "../../../assets/imgs/bob.svg";
import trackit from "../../../assets/imgs/trackit.svg";

export default function Header() {
  return (
    <Top>
      <img src={trackit} alt="" />
      <img src={bob} alt="" />
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

  :nth-child(2) {
    border-radius: 9.9rem;
  }
`;
