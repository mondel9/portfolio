import styled from "styled-components";


export const ProjectContainer = styled.section`
  padding-bottom: 3rem;
  background-color: var(--light-blue);
  
  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
  } 
`

export const ProjectWrapper = styled.div`
  display: grid;
  width: 100%;
  background-color: #ffffff;
  border-radius: 3rem;
  padding: 3rem;
  box-shadow: 1px 1px 2px var(--shadow);
`

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 3px;
  line-height: 1;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const ProjectBody = styled.p`
  font-size: 1.3rem;
  line-height: 1.4;
  margin: 1rem 0;
`

export const InlineLink = styled.a`
  font-size: 1.2rem;
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
  text-decoration: none;
  cursor: pointer;
`

export const ImgWrap = styled.div`
  display: flex;
  /*height: 30rem;*/
  justify-content: center;
  overflow: hidden;

`

export const ProjectImg = styled.img`
  object-fit: contain;
  width: 100%;
`

export const ToolList = styled.p`
  font-size: 1.1rem;
  color: var(--accent);
  padding: 1rem 0;
`