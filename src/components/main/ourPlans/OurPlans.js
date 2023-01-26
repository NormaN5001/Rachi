import React from "react";
import * as S from "./Styles";

export default function OurPlans() {
  return (
    <S.PlansSection>
      <S.Title>Nossos Planos</S.Title>
      <S.SubTitle>Se necessário, adquira um de nossos planos</S.SubTitle>
      <S.Cards>
        <S.Card>
          <h3>Bronze</h3>
          <label>
            <h4>R$</h4>
            <h2>28</h2>
            <h4>/mês</h4>
          </label>
          <p>
            Acesso básico a todas as funcionalidades, suporte técnico básico,
            armazenamento limitado, limitação de usuários.
          </p>
          <button>Assinar</button>
        </S.Card>
        <S.Card>
          <h3>Prata</h3>
          <label>
            <h4>R$</h4>
            <h2>57</h2>
            <h4>/mês</h4>
          </label>
          <p>
            Vantagens do Bronze, Recursos adicionais, como relatórios avançados,
            integrações com outros aplicativos
          </p>
          <button>Assinar</button>
        </S.Card>
        <S.Card>
          <h3>Ouro</h3>
          <label>
            <h4>R$</h4>
            <h2>94</h2>
            <h4>/mês</h4>
          </label>
          <p>
            Vantagens do Prata, suporte técnico 24/7, acesso a treinamentos e
            webinars, serviço de consultoria personalizada.
          </p>
          <button>Assinar</button>
        </S.Card>
      </S.Cards>
    </S.PlansSection>
  );
}
