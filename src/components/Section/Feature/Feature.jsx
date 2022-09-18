import React from 'react'
import { Container, Left, Right, Subtitle, Title, Desc, Image} from '../../Styles/Feature.styled';
import AnimatedShapes from '../../Animation/AnimatedShapes';
import { FeatureButton } from '../../Styles/Buttons.styled';
import Socmed from '../../../images/feature.png'


const Feature = () => {
  return (
    <Container>
        <Left><Image src={Socmed}/></Left>
        <Right>
          <Title><b>pure</b> design 
          <br/>
          pure <b>power</b> </Title>
          <Subtitle>We know that good design means good business</Subtitle>
          <Desc>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</Desc>
          <Desc>We care about your business and guarantee you to achieve marketing goals </Desc>
          <FeatureButton>Learn More</FeatureButton>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Feature