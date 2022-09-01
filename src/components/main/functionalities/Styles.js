import styled from 'styled-components';

export const Functionalities = styled.section`
  margin-top: 170px;
  height: 400px;
`
export const TitleBox = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: #293145;
  font-family: 'Sora', sans-serif;
  text-align: center;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 900px){
    flex-wrap: wrap;
    justify-content: center;
  }

  div{
    width: 270px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 900px){
      width: 80vw;  
    }
  }
  h3{
    margin-top: 20px;
    color: #293145;
    font-size: 1.1rem;
  }
  p{
    margin-top: 10px;
    text-align: center;
    color: #6E7275;
    font-size: 1rem;
  }
`