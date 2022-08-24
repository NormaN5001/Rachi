import React from 'react'
import * as S from './Styles'

import Start from './start/Start'
import Functionalities from './functionalities/Functionalities'

export default function Main(){

  return(
    <S.MainSection>
      <Start/>
      <Functionalities/>
    </S.MainSection>
  )
}