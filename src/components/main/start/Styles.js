import styled from "styled-components";

export const Start = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const TitleBox = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  color: #293145;
`;
export const Button = styled.button`
  height: 56px;
  width: 200px;
  background-color: #0f9afe;
  border-style: none;
  border-radius: 50px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  transition: 0.4s;
  &:hover {
    background-color: #293145;
    cursor: pointer;
  }
`;
export const Imagem = styled.img``;
