import React from "react";
import * as S from "./Styles";

import Start from "./start/Start";
import Functionalities from "./functionalities/Functionalities";
import Download from "./download/Download";
import OurPlans from "./ourPlans/OurPlans";

export default function Main() {
  return (
    <S.MainSection>
      <Start />
      <Functionalities />
      <Download />
      <OurPlans />
    </S.MainSection>
  );
}
