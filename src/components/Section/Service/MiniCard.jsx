import React from 'react';
import { Button, Container, Image, Text } from '../../Styles/MiniCard.styled';
import { motion } from 'framer-motion';
import { cardAnimation } from '../../Animation/Animation';

const MiniCard = ({ serv }) => {
  const { service, icon } = serv;
  return (
    <Container
      as={motion.div}
      variants={cardAnimation}
      whileHover={{ backgroundColor: '#03045e', color: '#fff' }}
    >
      {icon}
      <Text>{service}</Text>
    </Container>
  );
};

export default MiniCard;
