import React from 'react'
import * as S from './Styles'

export default function Header(){

  return(
    <S.HeaderSection>
    <S.Logo>
      <S.Circles>
        <S.Blue></S.Blue>
        <S.Black></S.Black>
      </S.Circles>
      <S.TextLogo>Rachi</S.TextLogo>
    </S.Logo>
    <S.Navegation>
      <ul>
        <li>Funcionalidades</li>
        <li>App</li>
        <li>Planos</li>
        <li>Contato</li>
      </ul>
    </S.Navegation>
    </S.HeaderSection>
  )
}