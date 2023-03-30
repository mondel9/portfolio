import styled from 'styled-components'; 

export const HeroWrapper = styled.section`
  display: flex;
  width: 100%;
  background-color: transparent;
  /*margin-top: -3rem;*/
`

export const HeroTitle = styled.p`
  font-size: 3rem;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bolder;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 3px;
  }
`

export const HeroSubtitle = styled.p`
  font-size: 2rem;
  justify-content: center;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`