import React from 'react';

import {
  Contact,
  ContactText,
  Container,
  Desc,
    Image,
  Info,
  Left,
  Phone,
  Right,
  Title,
} from '../Styles/Intro.styled';
import Woman from '../../images/woman-hero.png';
import AnimatedShapes from '../Animation/AnimatedShapes'
import { IntroButton } from '../Styles/Buttons.styled';

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Everything We Do Is Driven By Tech.  </Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.{' '}
        </Desc>
        <Info>
         <IntroButton>Start a Project</IntroButton>
          <Contact>
            <Phone>Call us (012) 345-6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>

      <Right>{<Image src={Woman}/>}</Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Intro;
