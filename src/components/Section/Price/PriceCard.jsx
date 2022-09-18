import React from 'react';
import { Container, PriceContainer, Price, Type, List, ListItem } from '../../Styles/PriceCard.styled';
import { PriceCards } from '../../Styles/Buttons.styled';



const PriceCard = ({card}) => {
    console.log('PRICE CARD COMPONENT')
    const {price, type, template, website } = card
  
  return (
    <Container>
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
      <PriceCards>Join Now</PriceCards>
    </Container>
  );
};

export default PriceCard;
