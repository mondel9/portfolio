import React from 'react';
import { 
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutP,
  AboutAngle,
  AboutBtnWrap,
  AboutBtn,
  Img
} from './AboutElements';

const About = () => {
  return (
    <>
    <AboutContainer>
          <AboutContent>
            <AboutH1>About me</AboutH1>
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
    </>
  );
};

export default About;