import React, { useRef, useEffect } from 'react';

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
import AnimatedShapes from '../Animation/AnimatedShapes';
import { IntroButton } from '../Styles/Buttons.styled';
import { motion } from 'framer-motion';
import { headerAnimation, imageScaleAnimation } from '../Animation/Animation';

const Intro = () => {
  return (
    <Container
      as={motion.div}
      initial='hidden'
      animate='show'
      transition={{ staggerChildren: 0.4}}
    >
      <Left as={motion.div} variants={headerAnimation}>
        <Title>Everything We Do Is Driven By Tech. </Title>
        <Desc>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.{' '}
        </Desc>
        <Info>
          <IntroButton
            as={motion.button}
            whileHover={{
              backgroundColor: '#caf0f8',
              outline: '#caf0f8',
              outlineStyle: 'solid',
              outlineColor: '#03045e',
              outlineWidth: '2px',
              color: '#03045e',
            }}
            transition={{ type: 'tween', ease: 'backIn' }}
          >
            Start a Project
          </IntroButton>
          <Contact>
            <Phone>Call us (012) 345-6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>

      <Right>
        {<Image src={Woman} as={motion.img} variants={imageScaleAnimation} />}
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
