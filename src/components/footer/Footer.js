import React from "react";
import * as S from "./Styles";

//images

export default function Footer() {
  return (
    <S.FooterSection>
      <S.ShadowFooter>
        <S.Title>Contato</S.Title>
        <S.SubTitle>
          Nossa equipe de especialistas está pronta para atendê-lo e responder a
          qualquer pergunta que você possa ter.
        </S.SubTitle>
        <S.InputDiv>
          <input type="email" placeholder="Seu melhor e-mail" />
          <button type="submit">Enviar</button>
        </S.InputDiv>
      </S.ShadowFooter>
    </S.FooterSection>
  );
}
