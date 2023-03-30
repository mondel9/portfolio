import React from 'react';
import { Grid } from '@mui/material';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectTitle,
  ProjectBody,
  InlineLink,
  ImgWrap,
  ProjectImg,
  ToolList
} from './ProjectElements';


const Project = ({id, title, body, link, href, tools, img, alt}) => {
  return (
    <>
      <ProjectContainer id={id} className='pad'>
        <ProjectWrapper>
          <Grid container justifyContent="center" alignItems="center" 
                rowSpacing={2} columnSpacing={{ xs: 3, sm: 4, md: 6 }}>
          <Grid item xs={12} md={5}>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectBody className='auto'>{body}</ProjectBody>
            <InlineLink href={href} target="_blank">{link}</InlineLink>
          </Grid>
          <Grid item xs={12} md={7}>
            <ImgWrap>
              <ProjectImg src={img} alt={alt} />
            </ImgWrap>
            <ToolList>{tools}</ToolList>
          </Grid>
          </Grid>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Project;