import styled from "styled-components";

export const HeaderSection = styled.section`
  height: 80px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Circles = styled.div`
  position: relative;
`;
export const Blue = styled.div`
  position: absolute;
  top: -8px;
  width: 15px;
  height: 15px;
  background-color: #0f9afe;
  border-radius: 50%;
`;
export const Black = styled.div`
  position: absolute;
  left: 8px;
  width: 15px;
  height: 15px;
  background-color: #293145;
  border-radius: 50%;
`;
export const TextLogo = styled.h3`
  margin-left: 40px;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  color: #293145;
  transition: 0.4s;
  &:hover {
    color: #0f9afe;
  }
`;
export const Navegation = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin-left: 50px;
    color: #6e7275;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: "Sora", sans-serif;
    transition: 0.4s;
    &:hover {
      cursor: pointer;
      color: #0f9afe;
    }
  }
`;
