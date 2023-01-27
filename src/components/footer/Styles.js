import styled from "styled-components";
import ImageFooter from "../../img/image-footer.png";

export const FooterSection = styled.footer`
  margin-top: 150px;
  height: 380px;

  background-image: url(${ImageFooter});
  background-size: 100%;
`;
export const ShadowFooter = styled.div`
  background: rgba(41, 49, 69, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  margin-top: 50px;

  color: #fff;
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  font-family: "Sora";
`;

export const SubTitle = styled.p`
  margin-top: 1rem;
  text-align: center;
  width: 500px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #dbdbdb;
`;
export const InputDiv = styled.div`
  margin-top: 99px;
  display: flex;
  gap: 40px;

  input {
    width: 300px;
    height: 38px;
    background-color: transparent;
    border-style: none;
    border-bottom: 1px solid #fff;
    outline: none;
    color: #fff;
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    ::placeholder {
      color: #fff;
    }
  }
  button {
    font-family: "Inter";
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    height: 38px;
    width: 118px;
    background-color: #0f9afe;
    border-style: none;
    border-radius: 50px;
    &:hover {
      cursor: pointer;
    }
  }
`;
