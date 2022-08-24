import React from 'react'
import * as S from './Styles'

import ImagemStart from '../../../img/image-start.png'

export default function Start(){

  return(
    <S.Start>
      <S.Left>
        <S.TitleBox>Rachi, <br/>é tudo que você<br/> precisa em um só lugar.</S.TitleBox>
        <S.Button>Cadastrar-se</S.Button>
      </S.Left>
      <S.Imagem src={ImagemStart} alt=""/>
    </S.Start>
  )
}