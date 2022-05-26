import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TelaLogin = styled.div`
  margin-top: 6.8rem;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 3.2rem;
  }

  p {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;

    font-size: 1.4rem;
    color: #52b6ff;
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 30.3rem;
    height: 4.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.6rem;

    padding-left: 1rem;
    background: #ffffff;
    border: 1px solid #d5d5d5;

    &::placeholder {
      color: #a8a7a7;
      font-size: 2rem;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 4.5rem;
    width: 30.3rem;

    font-size: 2.1rem;
    color: #fff;

    border-radius: 0.4rem;
    border: none;
    background-color: #52b6ff;

    svg {
      height: 1rem;
    }
  }
`;
