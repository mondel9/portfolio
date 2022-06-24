import styled from "styled-components";

export const ProjectContainer = styled.div`
  color: var(--brown-deep);
  background: var(--orange-bg);

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 250px 24px;
  justify-content: center;
`

export const ProjectRow = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
`

export const Heading = styled.h1`
  color: var(--brown-deep);
  font-size: 2.5rem;
  line-height: 1.125;
  font-weight: 700;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  color: var(--bright-orange);
  max-width: 440px;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 18px;
`

export const Body = styled.p`
  font-size: 1.2rem;
  line-height: 1.65;
  margin: 25px auto;
  font-family: 'Roboto', sans-serif;
`

export const Link = styled.a`
  color: var(--brown-deep);
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.65;
  margin: 25px auto;
  font-family: 'Roboto', sans-serif;
  border-bottom: .125em solid var(--yellow-orange);
  text-decoration: none;
`

export const ProjectBtnWrap = styled.div`
  display: flex;
  margin-top: 18px;
`

export const ProjectBtn = styled.button`
  border-radius: 50px;
  background: var(--soft-orange);
  white-space: nowrap;
  margin-right: 18px;
  padding: 16px 24px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background: var(--bright-orange);
    color: white;
  }
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0; 
`
