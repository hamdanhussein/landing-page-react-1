import React, { useEffect } from 'react';
import {
  Container,
  Left,
  Right,
  Subtitle,
  Title,
  Desc,
  Image,
} from '../../Styles/Feature.styled';
import AnimatedShapes from '../../Animation/AnimatedShapes';
import { FeatureButton } from '../../Styles/Buttons.styled';
import Socmed from '../../../images/feature.png';
import {
  titleAnimation,
  subtitleAnimation,
  imageScaleAnimation,
} from '../../Animation/Animation';
import { motion } from 'framer-motion';

const Feature = () => {
  return (
    <Container 
      
      as={motion.div}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <Left as={motion.div} variants={imageScaleAnimation}>
        <Image src={Socmed} />
      </Left>
      <Right>
        <Title as={motion.div} variants={titleAnimation}>
          <b>pure</b> design
          <br />
          pure <b>power</b>{' '}
        </Title>
        <Subtitle as={motion.span} variants={subtitleAnimation}>
          We know that good design means good business
        </Subtitle>
        <Desc as={motion.p} variants={subtitleAnimation}>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc as={motion.p} variants={subtitleAnimation}>
          We care about your business and guarantee you to achieve marketing
          goals{' '}
        </Desc>
        <FeatureButton
          as={motion.button}
          variants={titleAnimation}
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
          Learn More
        </FeatureButton>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
