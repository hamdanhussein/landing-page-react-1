import React from 'react';
import PriceCard from './PriceCard';
import { Container } from '../../Styles/Price.styled';

const priceCard = [ {
    price: '10',
    type: 'Basic Plan',
    template: '200 Hand-Crafted Templates',
   
    website: '50+ PreBuilt Websites',
    
}, 
{
    price: '20',
    type: 'Premium Plan',
    template: '400 Hand-Crafted Templates',
   
    website: '100+ PreBuilt Websites',
   
}, 
{
    price: '30',
    type: 'Basic Plan',
    template: '500+ Hand-Crafted Templates',
    
    website: '100+ PreBuilt Websites',
   
}]


const Price = () => {
  
  return (
    <Container>
    {priceCard.map((card, i)=> (
          <PriceCard key={i} card={card}/>
    ))}
    
      
    </Container>
  );
};

export default Price;
