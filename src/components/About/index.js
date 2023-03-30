import React from 'react';
import { Grid } from '@mui/material';
import Photo from '../../images/lab-photo-grayscale.JPG';
import { 
  AboutContainer,
  AboutP,
  ImgWrap,
  AboutImg
} from './AboutElements';

const About = () => {
  return (
    <>
<<<<<<< HEAD
    <AboutContainer>
          <AboutContent>
            <AboutH1>About me.</AboutH1>
              <AboutP>
                <b>Monica Del Valle | Software Developer</b><br /><br />
                As an aspiring bioinformatician I design and develop full stack web applications 
                with a special interest in creating useful tools for analyzing and viewing biomedical data.
              </AboutP>
              <AboutBtnWrap>
                <AboutBtn>Github</AboutBtn>
                <AboutBtn>LinkedIn</AboutBtn>
              </AboutBtnWrap>
          </AboutContent>
    </AboutContainer>
    <AboutAngle></AboutAngle>
=======
      <AboutContainer id="about" className="pad">
        <Grid container alignItems="center"
          rowSpacing={2} columnSpacing={{ xs: 3, sm: 4, md: 12 }}>
          <Grid item xs={6}>
            <h1 className="section-title">About</h1>
            <AboutP>I am a software engineer with a bachelors of science in
                computer science. I have three years of experience designing 
                and developing web applications and data analysis workflows.
            </AboutP>
            <AboutP>I also have an interest in data science stemming from my time 
              analyzing and visualizing large amounts of biomedical data. I hope 
              to expand my skill set to include predictive analytics. 
            </AboutP>
          </Grid>
          <Grid item xs={6}>
            <ImgWrap>
            <AboutImg src={Photo} />
            </ImgWrap>
          </Grid>
        </Grid>
      </AboutContainer>
>>>>>>> update build for gh-pages
    </>
  );
};

export default About;
