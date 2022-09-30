
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
} from '../Styles/Hero.styled';

import BusinessWoman from '../../images/woman-portrait.png';
import AnimatedShapes from '../Animation/AnimatedShapes';
import { IntroButton } from '../Styles/Buttons.styled';
import { motion } from 'framer-motion';
import { headerAnimation, imageScaleAnimation } from '../Animation/Animation';

const Intro = () => {
  return (
    <Container
      id='home'
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
            <Phone>Call us (+632) 480-8990</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>

      <Right>
        {<Image src={BusinessWoman} as={motion.img} variants={imageScaleAnimation} />}
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
