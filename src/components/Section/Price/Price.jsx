import React from 'react';
import PriceCard from './PriceCard';
import { Container } from '../../Styles/Price.styled';
import {motion} from 'framer-motion'
const priceCard = [ {
    price: '1,000',
    type: 'Basic Plan',
    template: '200 Hand-Crafted Templates',
    website: '50+ PreBuilt Websites',
    
}, 
{
    price: '2,000',
    type: 'Premium Plan',
    template: '400 Hand-Crafted Templates',
   
    website: '100+ PreBuilt Websites',
   
}, 
{
    price: '3,000',
    type: 'Basic Plan',
    template: '500+ Hand-Crafted Templates',
    
    website: '100+ PreBuilt Websites',
   
}]


const Price = () => {
  
  return (
    <Container  as={motion.div}  initial={'hidden'}
    whileInView={'show'}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ staggerChildren: 0.5 }}
    >
    {priceCard.map((card, i)=> (
          <PriceCard key={i} card={card}/>
    ))}
    
      
    </Container>
  );
};

export default Price;
