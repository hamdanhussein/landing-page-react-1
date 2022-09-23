import React, { useState } from 'react';
import MiniCard from './MiniCard';
import {
  Container,
  Left,
  Right,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ButtonText,
  Image,
  Video,
} from '../../Styles/Service.styled';
import styled from 'styled-components';
import { ServiceButton } from '../../Styles/Buttons.styled';
import Start from '../../../images/service.png';
import {
  MdPlayCircleOutline,
  Md3DRotation,
  MdDeveloperMode,
  MdAddchart,
} from 'react-icons/md';
import { motion } from 'framer-motion';
import {
  imageSlideAnimate,
  titleAnimation,
  subtitleAnimation,
} from '../../Animation/Animation';

const services = [
  {
    service: 'Digital Media & Design',
    icon: <Md3DRotation fontSize='30px' color='crimson' />,
  },
  {
    service: 'Development',
    icon: <MdDeveloperMode fontSize='30px' color='crimson' />,
  },
  {
    service: 'Lead Generation',
    icon: <MdAddchart fontSize='30px' color='crimson' />,
  },
];

const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container
      as={motion.div}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <Left>
        <Image
          open={open}
          src={Start}
          as={motion.img}
          variants={imageSlideAnimate}
        />

        <Video
          open={open}
          autoPlay
          loop
          controls
          src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
        />
      </Left>
      <Right>
        <Wrapper>
          <Title as={motion.h1} variants={titleAnimation}>
            Simple process to start
          </Title>
          <Desc as={motion.p} variants={subtitleAnimation}>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirements. We
            work with you, not for you. Although we have a resources
          </Desc>
          <CardContainer>
            {services.map((service, i) => (
              <MiniCard key={i} serv={service} />
            ))}
          </CardContainer>
          <ServiceButton
            onClick={() => setOpen(true)}
            as={motion.span}
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
            <MdPlayCircleOutline fontSize='25px' />
            <ButtonText>How it works</ButtonText>
          </ServiceButton>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
