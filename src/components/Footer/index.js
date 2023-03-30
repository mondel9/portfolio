import React from 'react';
import { Grid } from '@mui/material';
import { animateScroll as scroll } from "react-scroll";
import { 
  IoLogoGithub,
  IoLogoLinkedin,
  IoArrowUpCircle
} from 'react-icons/io5';
import {
  FooterContainer,
  FooterText,
  Icon,
  ScrollIcon
} from './FooterElements';

const toggleHome = () => {
  scroll.scrollToTop()
}

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Grid container spacing={0} align="center" alignItems="center">
          <Grid item xs={3}>
            <Icon href={"https://www.linkedin.com/in/mdelvalle17"} target={"_blank"}>
                <IoLogoLinkedin />
            </Icon>
            <Icon href={'https://github.com/mondel9'} target={"_blank"}>
              <IoLogoGithub />
            </Icon>
          </Grid>
          <Grid item xs={6}>
            <FooterText>Designed and Developed by Monica Del Valle | &copy; 2023</FooterText>
          </Grid>
          <Grid item xs={3}>
            <ScrollIcon>
              <IoArrowUpCircle onClick={toggleHome}/>
            </ScrollIcon>
          </Grid>
        </Grid>
      </FooterContainer>
    </>
  );
};

export default Footer;