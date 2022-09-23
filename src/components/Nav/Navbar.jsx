import React from 'react';
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Menu,
  MenuItem,
  Button
} from '../Styles/NavBar.styled';
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <Container>
      <Wrapper as={motion.div} initial={{y: -250}} animate={{y:-10}} transition={{delay: 1.2}}>
        <Left>
        <Logo>Agency</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Features</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Contacts</MenuItem>
        </Menu>
        </Left>
        
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
