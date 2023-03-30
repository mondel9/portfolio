import React from 'react';
import { Grid } from '@mui/material';
import { 
  ContactContainer, 
  InfoCard,
  InfoBody,
  InlineLink
} from './ContactElements';

const Contact = () => {
  return (
    <>
    <ContactContainer id="contact" className="pad">
      <h1 className="section-title">Contact</h1>
      <Grid container spacing={0} align="center" marginTop={"3rem"}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <InfoCard>
            <InfoBody>Get in touch via 
              <InlineLink href={"https://www.linkedin.com/in/mdelvalle17"} target="_blank"> LinkedIn.</InlineLink>
            </InfoBody>
          </InfoCard>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </ContactContainer>
    </>
  );
;}

export default Contact;