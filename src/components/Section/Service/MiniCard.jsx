import React from 'react'
import { Button, Container, Image, Text } from '../../Styles/MiniCard.styled'

const MiniCard = ({serv}) => {

  const {service, icon} = serv;
  return (
        <Container>
            {icon}
            <Text>
                {service}
            </Text>
           
        </Container>
  )
}

export default MiniCard