import React from 'react'
import { Container, Copyright, List, ListItem, Wrapper } from '../Styles/Footer.styled'
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
       
      </Wrapper>
    </Container>
  )
}

export default Footer