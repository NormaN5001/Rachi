import React from "react";
import * as S from "./Styles";

//images
import Smartphone from "../../../img/image-phone.png";
import GooglePlay from "../../../img/googleplay-icon.png";

export default function Download() {
  return (
    <S.DownloadSection>
      <S.Left>
        <S.Title>Baixe nosso ap para desfrutar mais!</S.Title>
        <S.Paragraph>
          "Está cansado de lidar com vários aplicativos diferentes para se
          comunicar com amigos e familiares? Quer ter tudo em um só lugar? Então
          você precisa instalar o nosso aplicativo de comunicações agora!
        </S.Paragraph>
        <S.Button>
          <img src={GooglePlay} alt="icone do Google Play" />
        </S.Button>
      </S.Left>
      <S.Right>
        <img src={Smartphone} alt="imagem de um celular" />
      </S.Right>
    </S.DownloadSection>
  );
}
