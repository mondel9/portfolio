import styled from 'styled-components'; 

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100vh;
  
  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
  }
`

export const AboutP = styled.p`
  margin-top: 2rem;
  font-size: 1.3rem;
  text-align: start;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ImgWrap = styled.div`
  display: flex;
  /*height: 30rem;*/
  justify-content: center;
  overflow: hidden;
`

export const AboutImg = styled.img`
  object-fit: contain;
  width: 75%;
`
