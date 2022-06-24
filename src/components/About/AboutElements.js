import styled from 'styled-components'; 

export const AboutContainer = styled.div`
  background: var(--plum-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30 px;
  margin-top: -80px;
  height: 900px;
  position: relative;
  z-index: 1;
`

export const AboutContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  //align-items: center;
`

export const AboutH1 = styled.h1`
  color: var(--plum-deep);
  font-size: 48px;
  text-align: center;
  letter-spacing: 1.44;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const BgContainer = styled.div`
  display: inline-block;
  position: relative;

  :before {
    z-index: -1;
    position: absolute;
    top: -5%;
    left: -5%;
    width: 20%;
    height: 120%;
    background: #e8d4c0;
    content: '';
  }
`

export const AboutP = styled.p`
  margin-top: 18px;
  color: var(--plum-deep);
  font-size: 24px;
  text-align: start;
  max-width: 600px;
  z-index: 10;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const AboutAngle = styled.div`
  background-color: var(--orange-bg);
  height: 75px;
  width: 100%;
  position: relative;

  :after {
    background-color: var(--plum-bg);
    clip-path: polygon(0 0, 100% 0, 25% 100%);
    height: 80px;
    width: 100%;
    position: absolute;
    content: '';
  }
`

export const AboutBtnWrap = styled.div`
  display: flex;
  margin-top: 18px;
`

export const AboutBtn = styled.button`
  border-radius: 50px;
  background: var(--plum-mid);
  white-space: nowrap;
  margin-right: 18px;
  padding: 16px 24px;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background: #9A8492;
    color: white;
  }
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0; 
`

