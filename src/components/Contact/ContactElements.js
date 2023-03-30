import styled from 'styled-components'; 

export const ContactContainer = styled.section`
  background: var(--bg);
  padding-top: 10rem;
  padding-bottom: 10rem;

  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
  }
`

export const InfoCard = styled.div`
  /*border-radius: 3rem;
  border: 2px solid var(--light-blue);*/
  padding: 3rem;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #ea8d8d, #a890fe) border-box;
  border-radius: 3rem;
  border: 4px solid transparent;

`

export const InfoBody = styled.p`
  font-size: 2rem;
  letter-spacing: 2px;
`

export const InlineLink = styled.a`
  font-size: 2rem;
  color: var(--accent);
  text-decoration: none;
  cursor: pointer;
`