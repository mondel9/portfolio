import React from 'react';
import { Grid } from '@mui/material';
import { 
  HeroWrapper,
  HeroTitle,
  HeroSubtitle
} from './HeroElements';


const Hero = () => {
  return (
    <>
      <HeroWrapper id="home" className="pad center-screen hero-gradient">
        <Grid container spacing={0} align="center" marginTop={'-6rem'}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <HeroTitle>Monica Del Valle</HeroTitle>
            <HeroSubtitle>Software Engineer,</HeroSubtitle>
            <HeroSubtitle>Data Analyst</HeroSubtitle>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </HeroWrapper>
    </>
  );
};

export default Hero;