import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  const navigate = useNavigate();

  const percentage = 40;

  return (
    <>
      <Bottom>
        <p>Hábitos</p>

        <ProgressBar style={{ padding: "40px 40px 40px 40px" }}>
          <CircularProgressbar
            value={percentage}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52b6ff",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </ProgressBar>

        <p>Histórico</p>
      </Bottom>
    </>
  );
}

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 7rem;
  background-color: #fff;

  p {
    font-size: 1.8rem;
    color: #52b6ff;
  }
`;

const ProgressBar = styled.div`
  width: 17rem;
  height: 17rem;
  margin-bottom: 4rem;
`;
