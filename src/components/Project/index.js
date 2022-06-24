import React from 'react';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  Column1, 
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  Body,
  Link,
  ImgWrap,
  Img,
  ProjectBtnWrap,
  ProjectBtn
} from './ProjectElements';


const Project = ({id, imgStart, heading, img, alt}) => {
  return (
    <>
      <ProjectContainer id={id}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <Heading>{heading}</Heading>
              <Body>Web application for the <Link href=''>MuSyC algorithm</Link> to fit dose response surfaces and manage drug 
                combination experiment data. Designed an easy-to-use, modern user interface 
                using Bootstrap and HTML/CSS. Added datas haring and visualization features 
                using various Python libraries.</Body>
            </TextWrapper>
            <ProjectBtnWrap>
              <ProjectBtn>View Site</ProjectBtn>
              <ProjectBtn>Source Code</ProjectBtn>
            </ProjectBtnWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    
    </>
  );
};

export default Project;