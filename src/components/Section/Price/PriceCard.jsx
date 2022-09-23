import React from 'react';
import {
  Container,
  PriceContainer,
  Price,
  Type,
  List,
  ListItem,
} from '../../Styles/PriceCard.styled';
import { PriceCards } from '../../Styles/Buttons.styled';
import { priceCardAnimation } from '../../Animation/Animation';
import { motion } from 'framer-motion';

const PriceCard = ({ card }) => {
  const { price, type, template, website } = card;

  return (
    <Container as={motion.div} variants={priceCardAnimation}>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type}</Type>
      <List>
        <ListItem>{template}</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>{website}</ListItem>
        <ListItem>Premium Plugins</ListItem>{' '}
      </List>
      <PriceCards
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
        Join Now
      </PriceCards>
    </Container>
  );
};

export default PriceCard;
