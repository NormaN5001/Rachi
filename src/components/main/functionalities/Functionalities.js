import React from "react";
import * as S from "./Styles";

import ImagemStart from "../../../img/image-start.png";
import UserImg from "../../../img/user.png";
import CheckImg from "../../../img/check.png";
import SmileImg from "../../../img/smile.png";

export default function Start() {
  return (
    <S.Functionalities>
      <S.TitleBox>Como funciona</S.TitleBox>
      <S.Content>
        <div>
          <img src={UserImg} alt="Imagem do usuário" />
          <h3>Crie conexões</h3>
          <p>Faça conexões com pessoas em outros países.</p>
        </div>

        <div>
          <img src={CheckImg} alt="Imagem de verificar" />
          <h3>100% gratuito</h3>
          <p>Aproveite desta oportunidade totalmente grátis.</p>
        </div>

        <div>
          <img src={SmileImg} alt="Imagem de um rosto feliz" />
          <h3>Compartilhamento</h3>
          <p>Compartilhe e ajude muito mais pessoas.</p>
        </div>
      </S.Content>
    </S.Functionalities>
  );
}
