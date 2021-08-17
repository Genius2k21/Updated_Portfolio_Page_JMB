import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <section row nopadding>
     <LeftSection>
       <SectionTitle main center>
         Welcome To <br />
         My Personal Portfolio</SectionTitle>
         <SectionText>
           I am a Software Developer showcasing my talent and abilities in Software Development. 
         </SectionText>
         <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
     </LeftSection>

  </section>
);

export default Hero;