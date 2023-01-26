import styled from "styled-components";

export const PlansSection = styled.section`
  text-align: center;
`;
export const Title = styled.h2`
  font-family: "Sora";
  font-weight: 600;
  font-size: 40px;
  color: #293145;
`;
export const SubTitle = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #6e7275;
`;
export const Cards = styled.div`
  margin-top: 96px;
  display: flex;
  justify-content: space-between;
`;
export const Card = styled.div`
  background: #eff8ff;
  border-radius: 8px;
  width: 380px;
  height: 455px;
  transition: 0.4s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-family: "Sora";
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #293145;
  }
  label {
    display: flex;
    font-family: "Roboto";
    color: #293145;
    font-weight: 700;
    font-size: 20px;
    h2 {
      font-size: 50px;
    }
    h4 {
      &:nth-child(3) {
        margin-top: 30px;
      }
    }
  }
  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #6e7275;
    width: 80%;
  }

  button {
    width: 220px;
    height: 43px;
    background-color: #0f9afe;
    color: #fff;
    font-family: "Inter";
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    border-style: none;
    border-radius: 50px;
    box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);
    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    background: #293145;

    h3 {
      color: #fff;
      font-size: 2rem;
    }
    label {
      color: #fff;
    }
    p {
      color: #dbdbdb;
    }
  }
`;
