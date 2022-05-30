import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  const navigate = useNavigate();
  const { habitDoned, habitsToday } = useContext(UserContext);
  const [percentage, setPercentage] = useState(
    (habitDoned.length / habitsToday.length) * 100
  );

  useEffect(() => {
    setPercentage((habitDoned.length / habitsToday.length) * 100);
  }, [habitDoned]);

  return (
    <>
      <Bottom>
        <p onClick={() => navigate("/habitos")}>Hábitos</p>

        <ProgressBar style={{ padding: "38px" }}>
          <button onClick={() => navigate("/hoje")}>
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
          </button>
        </ProgressBar>

        <p onClick={() => navigate("/historico")}>Histórico</p>
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
    cursor: pointer;
    font-size: 1.8rem;
    color: #52b6ff;
  }
`;

const ProgressBar = styled.div`
  margin-bottom: 5rem;

  button {
    width: 10rem;
    height: 10rem;
    border: none;
    background-color: initial;
  }

  svg {
    cursor: pointer;
  }
`;
