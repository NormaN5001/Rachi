import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default function Rachi() {
  const GlobalStyle = createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    
  }
`;
  const Container = styled.section`
    margin: 0 10vw 0 10vw;
    @media (max-width: 1440px) {
      margin: 0 5vw 0 5vw;
    }
    @media (max-width: 1024px) {
      margin: 0 30px 0 30px;
    }
    @media (max-width: 500px) {
      margin: 0;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main />
      </Container>
      <Footer />
    </>
  );
}
